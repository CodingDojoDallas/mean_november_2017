var express = require('express');

var session = require('express-session');

app.use(session({secret: 'secret_key'}));

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.redirect('/index');
});

app.get('/index', function(request, response){
	var counter;
	if(!(request.session.counter)){
		request.session.counter = 0;
	}
	request.session.counter++;
	response.render('index', {counter: request.session.counter});
});

app.post('/add_two', function(request, response){
	request.session.counter++;
	response.redirect('/');
});

 app.post('/reset', function(request, response){
	 request.session.counter = 0;
	 response.redirect('/');
 });

app.listen(8000, function(){
	console.log("listening on port 8000");
});
