//loads the express module
var express = require('express');
//invoke var express and store the resuling application in var app
var app = express();
//pull the body parsing jazz
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var path = require('path')

//get session shit
var session = require('express-session');
app.use(session({secret: 'shivshiv'}));

//render views
app.set('views',__dirname + '/views');
//now set the view engine itself so that express knows that we are using EJS
app.set('view engine','ejs');

//handle the base route'/' and respond with Hello Express
app.get('/',function(request,response){
    response.render('index', {title: 'my Express project'});
})
//why is this called get?

//change this to app.post to do form shit
app.post('/users/doSomething', function(request,response){
    console.log('POST DATA \n\n', request.body)
    response.redirect('/');
})

app.get("/users/:id", function (request, response){
    console.log("The user id requested is:", request.params.id);
    request.session.id = request.params.id;
    console.log(request.params.id)
    console.log(request.session);
    console.log(request.session.id);
    // just to illustrate that req.params is usable here:
    response.send("You requested the user with id: " + request.params.id); //always use params
    // code to get user from db goes here, etc...
});
app.get('/users2', function (request,response){
    //hard code some shit to pass in. this would usually be from a db
    var users_array = [ //if you're passing in multiple shit, wrap objects into an array BUT then you have to pass in the bottom as a DICTIONARY
        {name: 'Shiv', email: 'shiv@shiv.com'},
        {name: 'Shiv1', email: 'shiv1@shiv.com'},
        {name: 'Shiv2', email: 'shiv2@shiv.com'},
        {name: 'Shiv3', email: 'shiv3@shiv.com'}
    ]
    //pass in a big ass JS object to the render 
    response.render('users', {users: users_array});//first is name of esj and second is object
})

//this line tells the server to use the /static folder for static content
app.use(express.static(__dirname + '/static'));
console.log(__dirname);

//set the port to listen to
app.listen(8000, function(){
    console.log('listening on port 8000')
})
//this line will almost always be at the end of your server.js file