var mongoose = require('mongoose');

var BunnySchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    age: { type: Number, min: 1, max: 150 },
    breed: { type: String },
    color: { type: String}
}, {timestamps: true });

module.exports = mongoose.model('Bunny', BunnySchema);