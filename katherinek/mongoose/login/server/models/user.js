var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstname: { type: String, required: true, minlength: 2},
	lastname: { type: String, required: true, minlength: 2},
	dob: {type: Date, required: true},
	email: { type: String, unique: true, required: true, minlength: 8},
	password: { type: String, required: true, minlength: 8},
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);