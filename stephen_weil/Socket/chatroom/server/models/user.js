var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    }
}, {timestamps: true});

var User = mongoose.model("User", UserSchema);