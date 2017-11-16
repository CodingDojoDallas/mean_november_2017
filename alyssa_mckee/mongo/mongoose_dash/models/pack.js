module.exports = (function(){
	var db_name = "pack"
	mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/'+ db_name,{useMongoClient: true});

	var PackSchema = new mongoose.Schema({
		animal: {type: String, required: true},
		pack_name: {type: String, required: true, minlength: 5},
		pack_size: {type: Number, required: true, min: 3}
	},{timestamps: true})

	mongoose.model('Pack', PackSchema); 

	return mongoose.model('Pack');
})()

//useful
//MySchema.methods.greet = function() { return 'Hello, ' + this.name; }; 