module.exports = (function(){
	var Posts = require("../models/posts")
	var Comments = require("../models/comments")
	
	var flash = require('../flash');
	
	return {
		create: (req,res) => {
			Posts.findOne({_id: req.params.id},(err, post) => {
				if (err) console.log(err);
				
				//create comment
				var comment = new Comments(req.body);
				comment._post = post._id;
				
				//update post
				post.comments.push(comment);
				
				//save comment
				comment.save((err)=>{
					if (err) {console.log(err);
						flash.flash_messages(req, comment.errors, post._id.toString())
						return res.redirect('/')
					}
					//save post
					post.save((err)=>{
						if (err) console.log(err);
						return res.redirect('/')
						
					})
					
				})
			})
		}
	}
})()