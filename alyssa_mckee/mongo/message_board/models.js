var db_name = "db_name"

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/'+ db_name);

var UserSchema = new mongoose.Schema({
	name: String,
	age: {type: Number}
},{timestamps: true})

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'


module.exports = {
	User: mongoose.model('User')
	
}