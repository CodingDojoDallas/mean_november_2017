//get express and store into variable
var express = require('express');
//set app to express functino
var app = express();

//get session shit
var session = require('express-session');
app.use(session({secret: 'shiv'}));

//get path because harshil told me
var path = require('path')

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//create routes 
app.get('/', function(request, response) {
    //if check to make sure that if there is no session, it gets set to 0
    if(!request.session.counter){
        request.session.counter = 0;
    }
    //each time it hits the route, increment the counter in session by one
    request.session.counter += 1;

    //render the counter template and push the object of "counter" with the request.session.counter thing
    response.render("counter", {counter: request.session.counter});
   })

//reset button which just sets the counter back to 0 and redirects to base
app.get('/reset', function (request, response){
    request.session.counter = 0;
    response.redirect('/');
})



// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
   });