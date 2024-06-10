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

//cors
app.use(cors( {
    origin: 'http://localhost:5173',
    credentials: true,
}))

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
  