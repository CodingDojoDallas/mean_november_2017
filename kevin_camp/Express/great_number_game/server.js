var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.redirect('/index');
});

app.get('/index', function(request, response){
	response.render('index');
});

app.listen(8000, function(request, response){
	console.log("listening on port 8000");
});

//Session App Use
// app.use(session){
// 	secret: 'secret_password',
// 	name: 'session',
// 	proxy: true,
// 	resave: true,
// 	saveUninitialized: true,
// }
