// import modules
var express = require("express");
var path = require("path");
var session = require('express-session');

// create app
var app = express();
var bodyParser = require('body-parser');

// configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'fjk1034nzp0f'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// set up routes
app.get("/", function(req, res) {
    if (!req.session.counter) {
        req.session.counter = 1;
    }
    else {
        req.session.counter++;
    }
    res.render("index", {counter: req.session.counter});
});

app.post("/plus_two", function(req, res) {
    req.session.counter++;
    res.redirect("/");
});

app.post("/reset", function(req, res) {
    req.session.counter = 0;
    res.redirect("/");
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});