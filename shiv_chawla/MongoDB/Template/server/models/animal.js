var mongoose = require('mongoose');
var PackSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1},
    color: { type: String, required: true, minlength: 1},
}, { timestamps: true } );

var Pack = mongoose.model('Pack', PackSchema); 

module.exports = mongoose.model('Pack')