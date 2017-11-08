var mongoose = require('mongoose');

var FoxSchema = new mongoose.Schema({
    genus: {type: String, required: true, minlength: 5, maxlength: 9},
    species: {type: String, required: true, minlength: 3, maxlength: 30},
    habitats: {type: Array, default: []},
    description: {type: String}
}, {timestamps: true});

var Fox = mongoose.model("Fox", FoxSchema);