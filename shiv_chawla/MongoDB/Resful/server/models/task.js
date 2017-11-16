var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: { type: String},
    description: { type: String},
    completed: { type: Boolean},
}, { timestamps: true } );

var Task = mongoose.model('Task', TaskSchema); 

module.exports = mongoose.model('Task')