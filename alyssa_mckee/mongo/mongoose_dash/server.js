var port = 8000;

var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(session({
	secret: 'codingdojorocks',
    resave: true,
    saveUninitialized: true
	}));

// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes')(app);

// tell the express app to listen on port 8000
app.listen(port, function() {
 console.log("listening on port 8000");
});