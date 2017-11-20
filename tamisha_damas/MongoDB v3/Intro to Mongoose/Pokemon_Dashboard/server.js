var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      session       = require('express-session'),
      mongoose      = require('mongoose'),

      app           = express(),
      port          = 8000;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/pokemon');
// Create a Schema for Users
var PokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3 },
    type: { type: String, required: true, minlength: 3 },
    category: { type: String, required: true, minlength: 3 },
}, {timestamps: true });
// Store the Schema under the name 'Pokemon'
mongoose.model('Pokemon', PokemonSchema);
// Retrieve the Schema called 'Pokemon' and store it to the variable Pokemon
var Pokemon = mongoose.model('Pokemon', PokemonSchema);

// This line allows you to use session
// app.use(session({secret: 'mysecret'}));
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Display all of the Pokemons GET '/'
app.get('/', function(req, res) {
  Pokemon.find({}, function(err, pokemons) {
  res.render('index', {pokemons: pokemons});
  });
})
//Create GET '/new' form
app.get('/pokemons/new', function(req, res) {
    res.render('new');
})

// Create
app.post('/pokemons', function(req, res) {
  console.log("Inside the create method.");
  // create a new Pokemon with the name, type, and health corresponding to those from req.body
  var pokemon = new Pokemon(req.body);
  // Try to save that new pokemon to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  pokemon.save(function(err) {
    console.log(pokemon.err);
    if(err) {
      console.log(err);
      res.render('new', {errors: pokemon.errors});
    }
    else {
      //redirects to index page to display all pokemon
        res.redirect('/');
    }
  });
});
// Display information about 1 Pokemon
// Because find one finds an object I only need to pass the object pokemon in my render 'display'
app.get('/:id', function(req, res){
  Pokemon.findOne({_id: req.params.id}, function(err, pokemons) {
    res.render('display', {pokemons: pokemons});
  });
})
//
// Show form to edit an e
app.get('/edit/:id', function(req, res) {
  Pokemon.findOne({_id: req.params.id}, req.body, function(err, pokemons){
    res.render('edit', {pokemons: pokemons});
  });
})
//Update action to post modifications to the database
app.post('/pokemons/:id', function(req, res) {
  Pokemon.findOneAndUpdate({_id: req.params.id}, req.body, function(err, pokemons){
    res.redirect('/');
  })
})

// Delete
app.post('/pokemons/:id/destroy', function(req, res){
  Pokemon.remove({_id: req.params.id}, function(err, pokemons){
    res.redirect('/');
  });
})




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
