var express = require ("express");
var  port = 6789;
var app = express();
// require body-parser
var bodyParser = require('body-parser');
var session = require('express-session');

// use it!
app.use(bodyParser.urlencoded({extended: true}));
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.use(session({
    secret :'secretpassword',
    name: 'hello-express',
    proxy :true,
    resave: true,
    saveUninitialized:true
}));
app.get('/', function(request,response){
    request.session.name = request.session.name || "";
    request.session.scount = request.session.count || 0;

    let users = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"} 
    ];
    response.render('index' , {users:users, count: request.session.count });
});

app.post('/increment', (request,response) => {
    request.session.count += 2;

    response.redirect('/');
})
app.listen (6789, function(){
    console.log("listening on 6789")
})