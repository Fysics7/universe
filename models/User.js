const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	
	password: {
		type: String,
		trim: true,
		validate: [
			function(input) {
				return input.length >= 6;
			}
		]
		
	},

	userCreated: {
		type: Date,
		default: Date.now
	}
	//you may replace this 'name' field with anything you like
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);