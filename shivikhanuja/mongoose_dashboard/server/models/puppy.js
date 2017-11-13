// require mongoose
var mongoose = require('mongoose');
// create the schema
var PuppySchema = new mongoose.Schema({
    name: {type:String, required: true},
    about: {type:String, required: true},
    color: {type:String, required: true},
    city: {type:String, required: true},
   })
// register the schema as a model   
mongoose.model('Puppy', PuppySchema); // We are setting this Schema in our Models as 'Puppy'