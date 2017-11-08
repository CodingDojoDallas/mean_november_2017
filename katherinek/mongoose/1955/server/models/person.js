var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	name: { type: String, required: true },
	year: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema)