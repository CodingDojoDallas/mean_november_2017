var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

var Person = mongoose.model('Person', PersonSchema)