//models

var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt-as-promised');


// schema
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Email is already taken, please login.']
  },
  dob: {
    type: Date
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  },

}, {timestamps: true });

// Custom Methods
UserSchema.methods = {
  encryptPassword: (next) => {
    var user = this;

    bcrypt.hash(user.password, 10)
    .then( (hashed_password) => {
      user.password = hashed_password;

      next();
    });
  },
//hey Matt, was there more to this?
  authenticate: (password) => {
    var user = this;
  }
}

UserSchema.path('email').validate( (value, done) => {
mongoose.model('User').count({ email: value }, (err, count) => {
    if (err) {
      return done(err);
    }
    // if 'count' is greate than zero, "invalidate"
    done(!count);
  });
}, 'Email already exists');

// Before save
UserSchema.pre('save', (next) => {
  let user = this;

  user.encryptPassword(next);
});

module.exports = mongoose.model('User', UserSchema);
