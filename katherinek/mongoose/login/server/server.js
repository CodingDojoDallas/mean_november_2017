var express = require('express');
var session = require('express-session');
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'secretpassword',
	name: 'hello-express',
	proxy: true,
	resave: true,
	saveUninitialized: true
}));

require('./config/mongoose.js');

var routes_setter = require("./config/routes.js");

routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
