var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(session({
    secret: "fjias891z0zn0fj01",
    resave: true,
    saveUninitialized: true
}));

require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');
routes(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});