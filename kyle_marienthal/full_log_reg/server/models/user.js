var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minlength: [2, "Name min is 2 chars"]
  }
}, {timestamps: true });

var User = mongoose.model("User", UserSchema);//this makes mongo useable by humans

module.exports = User;//now you can use User everwhere else that you import it into
