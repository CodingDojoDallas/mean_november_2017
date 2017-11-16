var mongoose = require('mongoose');
var Bunny = require('../models/bunny')
var Post = require('../models/post')
var Comment = require('../models/comment')

var posts = require('../controllers/posts')
var comments = require('../controllers/comments')

module.exports = function(app) {
	app.get('/posts', function (req, res){
		posts.show(req, res)
	});

	app.post('/posts', function (req, res){
		posts.create(req, res)
	 });

	app.post('/comments', function (req, res){
	    comments.create(req, res)
	 });

	app.get('/addpost', function (req, res){
		res.render('addpost');	
	});

	app.get('/posts/:id', function (req, res){
	// the populate method is what grabs all of the comments using their IDs stored in the 
	// comment property array of the post document!
	 Post.findOne({_id: req.params.id})
	 .populate('comments')
	 .exec(function(err, post) {
	      res.render('post', {post: post});
	        });
	});

	app.get('/', function(req, res) {
		bunnies = Bunny.find({}, function(err, bunnies){
			if(err){
				console.log('unable to get bunnies');
			}
			else {
				res.render('index', {bunnies: bunnies})
			}
		}) 
	});


	app.get('/bunny/new', function(req, res) {
			res.render('newbunny')
	});


	app.post('/bunnies', function(req, res) {
	    console.log("POST DATA", req.body);
	    var bunny = new Bunny({
	    	name: req.body.name, 
	    	age: req.body.age,
	    	breed: req.body.breed,
	    	color: req.body.color
	    	});

	    bunny.save(function(err){
	    	bunnies = Bunny.find()
	    	console.log("attempting to save bunny")
	    	if(err){
	    		console.log("error saving bunny")
	    		res.render('index', {err: err, bunnies: bunnies})
	    	}
	    	else {
	    		console.log('bunny added');
	    		res.redirect('/');
	    	}
	    })
	});

	app.get('/bunny/:id', function(req, res) {
		bunny = Bunny.findOne({_id: req.params.id}, function(err, bunny){
			if(err){
				console.log('unable to get bunny');
			}
			else {
			res.render('showbunny', {bunny: bunny})
			}
		})   
	})

	app.get('/bunny/edit/:id', function(req, res) {
		var bunny = Bunny.find({_id: req.params.id}, function(err, bunny){
			if(err){
				console.log('unable to get bunny');
			}
			else {
			res.render('editbunny', {bunny: bunny[0]})
			}
		})   
	})


	app.post('/bunny/:id', function(req, res) {
	    var bunny = Bunny.update({_id: req.params.id}, req.body, function(err, bunny){
	    	if(err){
				console.log('unable to get bunny');
			}
			else {
				res.redirect('/')
			}
		})   
	});


	app.post('/bunny/destroy/:id', function(req, res) {
	    var bunny = Bunny.remove({_id: req.params.id}, function(err){
	    	if(err){
	    		console.log('unable to remove bunny')
	    	} else {
	    		res.redirect('/')  
	    	}
	    })
	});

}