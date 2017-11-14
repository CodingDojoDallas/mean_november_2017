
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

var mongoose = require('mongoose');
//connect to the mongodb using GOD and our specific db. It should auto create the db
mongoose.connect('mongodb://localhost/old')

mongoose.Promise = global.Promise;

app.use(bodyParser.json()); 

var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})