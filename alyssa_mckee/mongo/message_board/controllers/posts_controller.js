module.exports = (function(){
	var Posts = require("../models/posts")
	/*function flash(req, errorObj){
		req.session.errors = errorObj;
	}
	function get_flashed_messages(req){
		var errors = req.session.errors
		delete req.session.errors
		return errors;
	}*/
	var flash = require('../flash');
	return {
		index: (req, res)=>{
			Posts.find({}).populate('comments').exec((err, posts)=>{
				if (err) console.log(err);
				
				var errors = flash.get_flashed_messages(req);
				console.log('get index')				
				res.render('index', {errors: errors, posts: posts});

			})
			
		},
		create: (req, res)=>{
			console.log('post posts create')
			var post = new Posts(req.body)
			post.save((err)=>{
				if (err){
					flash.flash_messages(req, post.errors, "message")
				}
				res.redirect('/');
			})
		}
		
	}
})()
