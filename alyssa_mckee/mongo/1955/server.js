var port = 8000;

var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./routes')(app);
app.listen(port, function() {
	console.log("listening on port 8000");
});