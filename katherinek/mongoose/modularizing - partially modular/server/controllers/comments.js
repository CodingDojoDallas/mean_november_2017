var mongoose = require('mongoose');
var Post = require('../models/post');
var Comment = require('../models/comment');

module.exports = {
	show: function(req, res) {
    	Comment.find({}, function(err, comments){
			if(err){
				console.log('unable to get comments');
			}
			else {
				res.render('comments', {comments: comments});	
			}
		}) 
    },

    create: function(req, res) {
	    Post.findOne({_id: req.body.id}, function(err, post){
	        var comment = new Comment(req.body);
	        comment._post = post._id;
	        comment.save(function(err){
	                post.comments.push(comment);
	                post.save(function(err){
	                    if(err) {
	                          console.log('Error');
	                    } else {
	                          res.redirect('/posts');
	                    }
	                });
	         });
	    });
    }
    
}
