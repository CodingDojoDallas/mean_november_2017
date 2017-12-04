
var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      app           = express(),
      port          = 8000;


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(path.join(__dirname + './static')));
// Using Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// This sets the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs'); 
//we're going to have /routes/index.js handle all of our routing
require('./routes/index.js')(app);



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
