// require express, config app
var express = require("express")
var app = require("./config.js")(express);

// root route to render the index.ejs view
app.get('/', function(req, res) {
	
	
	res.render("index");
})

app.get('/result', function(req, res) {
	
	
	res.render("result", req.session.data);
})

// post route for adding a user
app.post('/process', function(req, res) {
	console.log("POST DATA", req.body);
	req.session.data = req.body;
	res.redirect('/result');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});