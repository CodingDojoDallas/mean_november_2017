var mongoose = require('mongoose');

var KittenSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2 },
    gender: { type: String, required: true, minlength: 1 },
    color: { type: String, required: true, minlength: 1 }
}, { timestamps: true });

var Kitten = mongoose.model('Kitten', KittenSchema);