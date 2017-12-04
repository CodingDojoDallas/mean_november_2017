var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      session       = require('express-session'),
      mongoose      = require('mongoose'),

      app           = express(),
      port          = 8000;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo');
var UserSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 6},
 quote: { type: String, required: true, minlength: 6},
}, {timestamps: true });

var Schema = mongoose.Schema;
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// This line allows you to use session
app.use(session({secret: 'mysecret'}));
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//app.get('/') takes you to the root route where the form is displayed to enter your quotes
app.get('/', function(req, res) {
    res.render('index');
})

//app.get('/quotes') is the link to see all quotes ever entered by all users.
app.get('/main', function(req, res) {
  User.find({}, function(err, users) {
  res.render('main', {users: users});
  });
})

/*app.post('quotes') here you are viewing the form on the root route and when you press submit you are
posting all the information you entered to the database which redirects you to /quotes if there are no
errors. If there are errors the index page is rendered for you to re-enter info to the form */
app.post('/main', function(req, res) {
  var user = new User(req.body);
  user.save(function(err){
      if(err){
          res.render('index', {errors: user.errors})
      }
      else {
          res.redirect('/main');
      }
  });
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
