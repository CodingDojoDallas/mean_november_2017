var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.redirect('/index');
});

app.get('/index', function(request, response){
	response.render('index')
});

app.post('/result', function(request, response){
	console.log("POST DATA \n\n", request.body);
	var user = {
		name: request.body.name,
		location: request.body.location,
		language: request.body.language,
		comment: request.body.comment
	};
	response.render('results', {user: user})
});

app.post('/reset',function(request,response){
	response.redirect('/')
});

app.listen(8000, function(request, response){
	console.log("listening on port 8000");
});
