module.exports = (function(){
	var db_name = "quotes"
	mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/'+ db_name,{useMongoClient: true});

	var QuoteSchema = new mongoose.Schema({
		name: {type: String, required: true},
		quote: {type: String, required: true, minlength: 8}
	},{timestamps: true})

	mongoose.model('Quote', QuoteSchema); 

	return mongoose.model('Quote');
})()