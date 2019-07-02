const express = require("express");
const session = require('express-session');
const path = require("path");
const morgan = require('morgan');
const MongoStore = require('connect-mongo')(session)
const passport = require('./client/passport');
const user = require('./client/routes/user');
const dbConnection = require('./client/database');

const PORT = process.env.PORT || 3001;
const app = express();

// Use morgan logger for logging requests
app.use(morgan("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
