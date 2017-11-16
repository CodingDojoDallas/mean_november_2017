var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String, 
        required: [true, "First Name is required."], 
        minlength: [2, "First name must be at least two characters."],
        maxlength: [45, "First name must be 45 characters or less."],
        validate: {
            validator: function(value) {
                return /^[a-zA-Z]+$/.test(value);
            },
            message: "Name field may only contain letters."
        }
    },
    last_name: {
        type: String, 
        required: [true, "Last Name is required."], 
        minlength: [2, "Last name must be at least two characters."],
        maxlength: [45, "Last name must be 45 characters or less."],
        validate: {
            validator: function(value) {
                return /^[a-zA-Z]+$/.test(value);
            },
            message: "Name field may only contain letters."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters."],
        maxlength: [32, "Password must be 32 characters or less."],
        validate: {
            validator: function(value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password must contain at least 1 number, 1 uppercase, and a special character."
        }
    },
    email: {
        type: String,
        required: [true, "Email address is required."],
        unique: [true, "That email is already registered."],
        maxlength: [100, "Email may not be longer than 100 characters."],
        validate: {
            validator: function(value) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message: "Not a valid email address."
        }
    },
    birthday: {
        type: Date,
        required: true,
        validate: [{
            validator: function(value) {
                // validate date format
                return value.constructor === Date;
            },
            message: "Not a valid date."
        },
        {
            validator: function(value) {
                // validate its in the past
                let now = Date.now();
                let diff = now - value;
                return diff > 0;
            },
            message: "Birthday must be in the past."
        }]
    }
}, {timestamps: true});

var User = mongoose.model("User", UserSchema);