var db_name = "1955"
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/'+ db_name,{useMongoClient: true});

var PersonSchema = new mongoose.Schema({
	name: { type: String, required: true }
},{timestamps: true});

mongoose.model('Person', PersonSchema);

module.exports = mongoose.model('Person');