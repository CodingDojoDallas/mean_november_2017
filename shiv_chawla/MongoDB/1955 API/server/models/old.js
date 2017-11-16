var mongoose = require('mongoose');
//REMOVE THIS LINE FROM TEMP
var OldSchema = new mongoose.Schema({
    name: { type: String, required: true},
}, { timestamps: true } );

var Old = mongoose.model('Old', OldSchema); 

module.exports = mongoose.model('Old')