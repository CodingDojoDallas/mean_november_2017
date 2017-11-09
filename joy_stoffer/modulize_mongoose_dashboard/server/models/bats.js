var mongoose = require('mongoose');


// set up model
var BatSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  weight: { type: Number, required: true, minlength: 2 },
  color: { type: String, required: true, minlength: 2 },
}, {timestamps: true });

mongoose.model('Bat', BatSchema);

module.exports = mongoose.model('Bat');
