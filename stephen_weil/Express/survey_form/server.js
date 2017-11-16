// import modules, create app
var express = require("express");
var session = require('express-session');
var app = express();
var path = require("path");
// created a simple parser to try some stuff
var parser = require("./parser");

app.use(parser);
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'fji91988df81fd90'}));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // below code assumed previous version using promises
    /*if (req.session.data) {
        console.log(req.session.data);
    }*/
    res.render("index");
});

app.post("/submit", function(req, res) {
    req.session.data = req.body;
    res.redirect("/result");
    // below code is for earlier version using promises (instead of app.use)
    /*
    new Promise ((resolve, reject) => {
        parser(req, res);
        resolve();
    }).then(() => {
        req.session.data = req.mydata;
        res.redirect("/");
    });
    */
});

app.get("/result", function(req, res) {
    console.log(req.session.data);
    res.render("results", {data: req.session.data});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});