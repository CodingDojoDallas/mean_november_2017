var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
 _post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);