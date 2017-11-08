var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bunnies');

var BunnySchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    age: { type: Number, min: 1, max: 150 },
    breed: { type: String },
    color: { type: String}
}, {timestamps: true });

mongoose.model('Bunny', BunnySchema);
var Bunny = mongoose.model('Bunny')

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

var CommentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/posts', function (req, res){
	posts = Post.find({}, function(err, posts){
		if(err){
			console.log('unable to get posts');
		}
		else {
			res.render('posts', {posts: posts});	
		}
	}) 
});


app.post('/posts', function (req, res){
    console.log("POST DATA", req.body);
    var post = new Post({
    	text: req.body.text, 
    	});

    post.save(function(err){
    	var posts = Post.find()
    	console.log("attempting to save post")
    	if(err){
    		console.log("error saving post")
    		res.render('posts', {err: err, posts: posts})
    	}
    	else {
    		console.log('post added');
    		res.redirect('/posts');
    	}
    })
 });

app.post('/comments', function (req, res){
    Post.findOne({_id: req.body.id}, function(err, post){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._post = post._id;
        // now save both to the DB
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



// app.get('/quotes', function(req, res) {
// 	var quotes = Quote.find({}, function(err, quotes){
// 		if(err){
// 			console.log('unable to get quotes');
// 		}
// 		else {
// 		res.render('quotes', {quotes: quotes})
// 		}
// 	})   // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
// })


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})