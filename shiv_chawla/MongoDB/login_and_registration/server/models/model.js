//bring in mongoose
var mongoose = require('mongoose');

//build the schema
var UserSchema = new mongoose.Schema({
    first_name: { type: String},
    last_name: { type: String},
    password: { type: String},
    birthday: { type: Date},
    email: { type: String},
}, { timestamps: true } );

//combine the schema w/ the model and set to a variable MATT
var User = mongoose.model('User', UserSchema); 

//export the collectiopn
module.exports = mongoose.model('User')