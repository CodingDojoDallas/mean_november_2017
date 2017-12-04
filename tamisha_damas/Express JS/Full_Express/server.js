
      // loads the express module
var   express       = require('express'),
      // it is required to have access to the information sent in a POST request
      bodyParser    = require('body-parser'),
      path          = require("path");
      session       = require('express-session'),
      // invoke var express and store the resulting application in var app
var   app           = express(),
      // Port we will be listening on
      port          = 8000;


// This line allows you to use session
app.use(session({secret: 'mysecret'}));
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(path.join(__dirname + './static')));
// Using Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// This sets the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

// post route for adding a user and to process new user form data:
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
