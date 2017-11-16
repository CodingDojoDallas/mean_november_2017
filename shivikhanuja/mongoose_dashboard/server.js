var express = require("express");
var session = require('express-session');

var app = express();
var bodyParser = require ('body-parser');
var path = require('path');
var mongoose = require('mongoose');


app.set('views',__dirname + '/client/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(express.static(__dirname +'/client/static'));
app.set('view engine' ,'ejs');
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)
// tell the express app to listen on port 8000

app.listen(6789, function(){
	console.log("listening on port 6789");
})
