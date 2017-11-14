var mongoose = require('mongoose');
//connect to the mongodb using GOD and our specific db. It should auto create the db
mongoose.connect('mongodb://localhost/pack')

var PackSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1},
    color: { type: String, required: true, minlength: 1},
}, { timestamps: true } );

var Pack = mongoose.model('Pack', PackSchema); 

module.exports = mongoose.model('Pack')