//module.exports = function(express){
	var express = require("express")
	// path module -- try to figure out where and why we use this
	var app = express();

	var path = require("path");

	var session = require('express-session');
	// create the express app

	app.use(session({secret: 'codingdojorocks'}));

	var bodyParser = require('body-parser');

	// use it!
	app.use(bodyParser.urlencoded({ extended: true }));



	// static content
	app.use(express.static(path.join(__dirname, "./static")));

	// setting up ejs and our views folder
	app.set('views', path.join(__dirname, './views'));
	app.set('view engine', 'ejs');
	
	//return app;
	
	require("./routes")(app);
	
	app.listen(8000, function() {
	console.log("listening on port 8000");
	});
//}