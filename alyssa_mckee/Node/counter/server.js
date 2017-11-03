// require express
var express = require("express");

// path module -- try to figure out where and why we use this
var path = require("path");

var session = require('express-session');

// create the express app
var app = express();

app.use(session({secret: 'codingdojorocks'}));

var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));



// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
	req.session.count = req.session.count+1 || 1
	res.render("index", {count: req.session.count });
})

app.get('/2', function(req, res) {
	req.session.count = req.session.count+1 || 1
	res.redirect('/');
})

app.get('/clear', function(req, res) {
	req.session.count = undefined;
	res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
	console.log("listening on port 8000");
});