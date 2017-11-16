var mongoose = require('mongoose');
var Post = require('../models/post');

module.exports = {
  	show: function(req, res) {
    	Post.find({}, function(err, posts){
			if(err){
				console.log('unable to get posts');
			}
			else {
				res.render('posts', {posts: posts});	
			}
		}) 
    },


    create: function(req, res) {
	    var post = new Post({text: req.body.text});
	    post.save(function(err) {
	      	if(err){
	        	console.log("something went wrong");
	      	} else {
	        	res.redirect('/posts');
	      	}
	    })
    }

}
