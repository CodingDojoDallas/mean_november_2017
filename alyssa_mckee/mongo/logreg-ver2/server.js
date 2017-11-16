var port = 8000;

var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(session({
	secret: 'moongeese',
    resave: true,
    saveUninitialized: true
	}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./client/static")));

app.use((req,res,next) => {
	console.log(req.method + " request sent to " + req.url);
	next();
});

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/routes')(app);

app.listen(port, function() {
 console.log("listening on port 8000");
});