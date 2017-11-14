// Require the Express Module
var express = require('express');
// Require path
var path = require('path');
var mongoose = require('mongoose')
// Create an Express App
var app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//store the function routes setter in a variable 
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
//invokes the function stored in routes_setter and passes it app so that the routes.js file will connect
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})