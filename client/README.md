# MERN Stack Template for Full Stack Apps

A template for full-stack web applications.  React.js is used for the client side, node and express for the backend and mongodb for the database.  Backend inspired by 100Devs [binary-upload-boom] template with slight changes to handle error handling.

## Table of Contents
1. Introduction
2. Features
3. Technologies Used
4. Setup
    - Prerequisites
    - Installation

## Introduction
A template for full-stack web applications.  React.js is used for the client side, node and express for the backend and mongodb for the database.  Backend inspired by 100Devs [binary-upload-boom] template with slight changes to handle error handling.

## Features
This app is is just to get people started.  It comes with user authentication.  All thats left is for you to build on top of it.

## Technologies Used 
(make this into a list)
MongoDB/Mongoose, Express.js, React.js, Node.js, TailwindCSS, Cloudinary, Passport-Local.

## Setup
1. Clone the repo into your folder using the command  , git clone https://github.com/ervincodes/binary-upload-react.git (allow user to copy here)
2. CD into the project folder
cd mern-template
3. Split your terminal and cd into the server folder
cd server
4. Run npm comman to ensure installation of depencencies for server side
npm install
5. On the other split terminal, CD into the client 
cd client
6. Install dependancies 
npm install 

## Set up your environment variables
Create a .env file in the root directory and add the necessary environment variables.
PORT = 5050 (can be any port of your liking)
DB_STRING = [your database URI]
CLOUD_NAME = [your cloudinary cloud name]
API_KEY = [your cloudinary api key]
API_SECRET = [your cloudinary api secret]

## Running Locally

### Prerequisites
Must have Node.js installed to run. If you need to install Node.js, please refer to their website here.

Node.js
npm (or yarn)
MongoDB 

Must have the .env file in your server/config folder with your defined set of key/value pairs

### Running
1. You should have a split terminal open with one directory in the client side '/client' and the other on the server '/server
2. On the client
npm run dev
3. On the server
npm start

In your browser open two tabs and follow the URL's to your client and server so that they can start communicating 

## Contributing

This project is not perfect so all contributions are welcome! 

1. Fork the repository 
Click the "Fork" button on the top right of the repository page.
2. Clone your fork 
git clone https://github.com/your-username/your-forked-repo.git
3. Create a new branch: 
git checkout -b feature-branch
4. Make your changes and commit them: 
git commit -m "Description of your changes"
5. Push to your fork: 
git push origin feature-branch
6. Submit a pull request:
Open a pull request from your forked repository to the original repository.

## Contact
Provide contact information for the project maintainer(s). For example:

Email: your-email@example.com
GitHub: your-username
Twitter: @your-handle


