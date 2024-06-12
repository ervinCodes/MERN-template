const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

// Connect To Database
connectDB();

// Allow CORS for multiple origins
const allowedOrigins = [
    'http://localhost:5173', // Your local development URL
    'https://mern-template-six.vercel.app' // Replace with your Vercel deployment URL
]

const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  };

app.use(cors(corsOptions));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logs HTTP requests and shows in your server with colors and timestamps
app.use(logger("dev"));

// Passport sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

// Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is runningon PORT 5050");
});
  