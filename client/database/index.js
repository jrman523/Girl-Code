const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = require('../config/keys').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

module.exports = mongoose.connection;