var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ''},
    completed: {type: Boolean, required: true}
}, {timestamps: true});

var Task = mongoose.model('Task', TaskSchema)