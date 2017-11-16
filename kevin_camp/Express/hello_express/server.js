var express = require("express");

var app = express();

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
// 	console.log(request);
// 	console.log(response);
// 	response.send("Hello Express!");
// });

app.get('/', function(request, response){
	response.redirect('/index');
});

app.get('/index', function(request, response){
	var users = [
		{name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"}
	];
	response.render('index', {users: users});
});

// app.post('/index', function (request, response){
// 	//code to add user here
// 	response.redirect('/');
// });

app.listen(8000, function() {
	console.log("listenting on 8000");
});
