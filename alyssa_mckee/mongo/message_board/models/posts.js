var db_name = "message_board"
var mongoose = require('../node_modules/mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/'+ db_name,{useMongoClient: true});

var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
	author: { type: String, required: true , minlength: 4},
	text: { type: String, required: true },
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
	
},{timestamps: true});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');