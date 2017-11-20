var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      session       = require('express-session'),
      mongoose      = require('mongoose'),

      app           = express(),
      port          = 8000;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_commands');
// Create a Schema for Users model
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 3},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

// Store the Schema under the name 'User' THis tells mongoose to create a User database
mongoose.model('User', UserSchema);

// Retrieve the Schema called 'User' and store it to the variable User
var User = mongoose.model('User');

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

// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
app.get('/', (req, res) => {
  let users = User.find({}, function(err, users) {
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous
    // Make sure you handle the case when there is an error, as well as the case when there is no error
    if (err) {
      console.log(err);
      return res.render('index');
    }
    // var users = users;
    console.log('users: ', users);
    res.render('index', {users: users});
  });
});

// This is the route that we already have in our server.js
// When the user presses the submit button on index.ejs it should send a post request to '/users'.  In
//  this route we should add the user to the database and then redirect to the root route (index view).
app.post('/users', (req, res) => {
  // create a new User with the name and age corresponding to those from req.body
  var user = new User(req.body);
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      return res.redirect('users');
    }
  })
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

/*
// Create a Schema for Users
var UserSchema = new mongoose.Schema({
 name: {type: String},
 age: {type: Number}
}, {timestamps: true})
// Store the Schema under the name 'User'
mongoose.model('User', UserSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var User = mongoose.model('User');

// Find all Users
// Using the User Schema...
// ...retrieve all records matching {}
User.find({}, function(err, users) {
 // Retrieve an array of users
 // This code will run when the DB is done attempting to retrieve all matching records to {}
})

// Find all users based on a requirement
// ...retrieve all records matching {name:'Jessica'}
User.find({name:'Jessica'}, function(err, users) {
 // Retrieve an array of users matching the name. Even if 1 record is found, the result will be an array the size of 1, with 1 object inside. (Notice, if we are expecting to retrieve one record, we may want to use findOne and retrieve the object as oppose to an array the size of one.
 // This code will run when the DB is done attempting to retrieve all matching records to {name:'Jessica'}
})

// Finding one user
// ...retrieve 1 record (the first record found) matching {}
User.findOne({}, function(err, user) {
 // Retrieve 1 object
 // This code will run when the DB is done attempting to retrieve 1 record.
})

// Lets create a sample user// ...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){
 // This code will run when Mongo has attempted to save the record.
 // If (err) exists, the record was not saved, and (err) contains validation errors.
 // If (err) does not exist (undefined), Mongo saved the record successfully.
})


// Delete all users
// ...delete all records of the User Model
User.remove({}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {}
})

// Delete one users
// ...delete 1 record by a certain key/vaue.
User.remove({_id: 'insert record unique id here'}, function(err){
 // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
})

// Update any records
// ...update any records that match the query
User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){
 // This code will run when the DB has attempted to update the matching record.
})
// another way to update a record
User.find({name: 'Andriana'}, function(err, user){
 user.name = 'Andri'
 user.save(function(err){
     // if save was successful awesome!
 })
})
*/
