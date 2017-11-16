var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/message_board");

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 4},
    content: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 4},
    content: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'}
}, {timestamps: true});

mongoose.model("Post", PostSchema);
var Post = mongoose.model("Post");
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: "fjias891z0zn0fj01",
    resave: true,
    saveUninitialized: true
}));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    Post.find({})
    .populate('comments')
    .exec(function(err, posts) {
        if (err) {
            return res.render("index");
        }
        else {
            return res.render("index", {posts: posts});
        }
    });
});


app.post("/add_post", function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

app.post("/add_comment/:post_id", function(req, res) {
    Post.findOne({_id: req.params.post_id}, function(err, post) {
        var comment = new Comment(req.body);
        comment._post = post._id;
        comment.save(function(err) {
            post.comments.push(comment);
            post.save(function(err) {
                if (err) {
                    console.log(err);
                }
                return res.redirect("/");
            });
        });
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});