const User = require('../database/models/user');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		emailField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		User.findOne({ email: email }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
);

module.exports = strategy;