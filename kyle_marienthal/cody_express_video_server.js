//require my npm modules
// ********1st*********
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

// ********2nd*********
let app = express();
// ********4th*********
// set up the middleware______________________________
////views
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views")
// ********5th*********
////static content
app.use(express.static(__dirname + '/static'));
// ********6th*********
////POST request helper
app.use(bodyParser.urlencoded({ extended: true }));
// ********7th*********
////session
app.use(session({
  secret: 'anystringyouwantdoesntmatterwhatitis',
  resave: false,
  saveUninitialized: true,
}))

// ********8th*********
////set up the routes________________________________
app.get('/', (req, res) => {
  req.session.user = 'Cody'
  res.send('Setting the User to Cody');
})

// ********9th*********
app.get('/showUser', (req, res) => {
  res.render('showUser', {user: req.session.user })
})



// ********3rd*********
////turn on server___________________________
// must be at the bottom of the document
app.listen(port, () => console.log(`listening on port ${port}...`));
