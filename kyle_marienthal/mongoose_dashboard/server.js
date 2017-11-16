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
var Bat = mongoose.model('Bat');


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

//****  routes  ****
//display all bats (index page)
app.get('/', (req, res) => {
     let bats = Bat.find({}, (err, bats) => {
          if (err) {
               console.log(err);
               return res.render('/');
          }
          return res.render('index', {bats: bats});

     });
});

//add new bat page
app.get('/bats/new', (req, res) =>{
     console.log('******************');
     return res.render('new');
})
//create new bat post
app.post('/bats', (req, res) =>{
     //take the data from the form
     //form data is always available in the req.body
    let bat = new Bat(req.body);
    bat.save((error) => {
      if (error){
        console.log(bat.errors);
        return res.redirect('new')
      }
      else {
        console.log(bat);
      }
      return res.redirect('/')
    });
});




app.get('/bats/edit/:id', (req, res) =>{
     var bat = Bat.findOne({_id: req.params.id}, (err, bat) => {
          if (err) {
               console.log(err);
          }
          return res.render('edit', {bat: bat});
     });

})
// edit post
//this should be the update bat button route - KM
app.post('/bats/:id', (req, res) =>{
     Bat.update({_id: req.params.id},
          req.body, (err, result) =>{
               if (err) {console.log(err); }
          return res.redirect('/')
     });

});

//show page
app.get('/bats/:id', (req, res) =>{
     var bat = Bat.findOne({_id: req.params.id}, (err, bat) => {
          if (err) {
               console.log(err);
          }
          return res.render('show', {bat: bat});
     });

})

app.post('/bats/destroy/:id', (req, res) =>{
     console.log("&&&&&&&&&&&&&&&&&&&&&");
     Bat.remove({_id: req.params.id},
          (err, result) =>{
               if (err) {console.log(err); }
          return res.redirect('/')
     });
});


// // show
// app.get('/bats', (req, res) =>{
//
// });

//
//edit bat page


// //delete button
// app.get('/', (req, res) => {
//     req.session.user = 'Cody'
//     res.send('Setting the User to Cody');
// })
// //Create new view file for this route 'showUser.ejs'
// app.get('/showUser', (req, res) => {
//     res.render('showUser', {user: req.session.user})
// })
//
//
//***** Step 3 *******
//set up port MUST be at the bottom of the document!
app.listen(port, () => console.log(`listening on port ${port}...`));
