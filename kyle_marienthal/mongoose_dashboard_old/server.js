//***** Step 1 *******
//require npm modules
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')
let path = require('path')
// let session = require('express-session');
let port = 8000;

//***** Step 2 *******
//invoke express
let app = express();

//connecting a database
mongoose.connect('mongodb://localhost/mongoose_dashboard');

//***** Step 4 *******
//set up the middleware
//****  views  ****
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// set up model
var BatSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  weight: { type: Number, required: true, minlength: 2 },
  color: { type: String, required: true, minlength: 2 },
}, {timestamps: true });
mongoose.model('Bat', BatSchema);
//****  static content ****
app.use(express.static(__dirname + '/static'));
//****  POST request helper  ****
app.use(bodyParser.urlencoded({ extended: true }));
//****  session  ****
// app.use(session({
//     secret:'somestringitreallydoesnotmatterwhatyouput',
//     resave: false,
//     saveUninitialized: true,
// }));
//****  controller  ****
var batsController = require('./server/controllers/bats.js')
//****  routes  ****
//display all bats (index page)
app.get('/', batsController.index);
//add new bat page
app.get('/bats/new', batsController.new)
//create new bat post
app.post('/bats', batsController.create);
// edit post
app.get('/bats/edit/:id', batsController.edit);
//this should be the update bat button route - KM
app.post('/bats/:id', batsController.update);
//show page
app.get('/bats/:id', batsController.show);
//delete bat
app.post('/bats/destroy/:id', batsController.destroy);

//***** Step 3 *******
//set up port MUST be at the bottom of the document!
app.listen(port, () => console.log(`listening on port ${port}...`));
