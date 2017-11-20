var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path");
      session       = require('express-session');

var   app           = express(),
      port          = 8000;

// This line allows you to use session
app.use(session({secret: 'authman_secrets'}));
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(path.join(__dirname + './static')));
// Using Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// This sets the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
//Route to index page to render the page
app.get('/', function(request, response) {
  var counter;
  if(!(request.session.counter)){
    request.session.counter = 0;
  }
  request.session.counter++;
  response.render("index", {counter: request.session.counter});
});
app.post('/increase', function(request, response) {
  request.session.counter++;
  response.redirect('/')
})
app.post('/reset', function(request, response) {
  request.session.counter=0;
  response.redirect('/')
})

// tell the express app to listen on port 6789
app.listen(8000, function() {
 console.log("listening on port 8000");
});
