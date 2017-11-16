var db_name = "message_board"
var mongoose = require('../node_modules/mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/'+ db_name,{useMongoClient: true});

var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
	text: { type: String, required: true },
	author: { type: String, required: true, minlength: 4 },
	_post: { type: Schema.Types.ObjectId, ref: 'Post'}
	
},{timestamps: true});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');

