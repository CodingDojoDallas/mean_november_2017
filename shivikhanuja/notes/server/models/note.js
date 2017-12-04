var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: { 
        type: String, 
        required: [ true ,"Content is required." ], 
        minlength: [3, "Minimum character length is 3."] 
    }
}, { timestamps: true});

var Note = mongoose.model('Note', NoteSchema);


module.exports = Note;