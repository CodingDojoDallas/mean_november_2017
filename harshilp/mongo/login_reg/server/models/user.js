var mongoose = require('mongoose');
    bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    email: {type: String, required: true, minlength: 5, unique: true },
    password: {type: String, required: true, minlength: 7},
    birthday: {type: Date, required: true}  
}, {timestamps: true});

UserSchema.methods.validatelogin = function(input, cb) {
    bcrypt.compare(input, this.password, function(err) {
        console.log('here')
        if (err) {
            console.log(err);
            return cb(err, false);
        }
        return cb(null, true);
    });
};

UserSchema.pre('save', function(done) {
    var user = this;
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.log(err);
        } else {
            bcrypt.hash(user.password, salt, function(err, hashed) {
                if (err) {
                    console.log(err);
                } else {
                    user.password = hashed;
                }
                done();    
            });
        }
    });
});

var User = mongoose.model('User', UserSchema)