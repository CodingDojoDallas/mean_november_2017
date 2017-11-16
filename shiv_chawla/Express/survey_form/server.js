//get express and store into variable
var express = require('express');
//set app to express functino
var app = express();

//get session shit
var session = require('express-session');
app.use(session({secret: 'shiv'}));

app.use(express.static('/static', path.join(__dirname, '/static')))

//get path because harshil told me
var path = require('path')

//pull the body parsing jazz
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//create routes

app.get('/', function(request, response){
    response.render('index');
})

app.post('/submit', function(request, response){
    request.session.name = request.body.name;
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.comments = request.body.comment;
    response.redirect('results')
})

app.get('/results', function (request, response){
    data = {
        name: request.session.name,
        location: request.session.location,
        language: request.session.language,
        comments: request.session.comments
    }

    response.render('results',data)
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
   });