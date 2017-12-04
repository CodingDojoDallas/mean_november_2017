var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "modular" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/modular');
// Create a Schema for Users
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 3 },
    last_name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 3 },
    dob: { type: Date },
}, {timestamps: true });
// Store the Schema under the name 'User'
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
