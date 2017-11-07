//Step 1 - require npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;


//Step 2  invoke express
let app = express();

//step 4  set up the middleware

//**** Views  ***
app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));

//****  static content  ****
app.use(express.static(__dirname + 'static'));

//****  POST request helper  ****
app.use(bodyParser.urlencoded({ extended: true}));

//****  session  ****
app.use(session({
     secret: "secretsecretivegotasecret",
     resave: false,
     saveUninitialized: true,
}));

//****  routes  ****
app.get('/', (req, res) => {
      return res.render('index')
});

// app.get('/showUser', (req, res) =>{
// });
app.post('/survey', (req, res) =>{
     //take the data from the form
     //form data is always available in the req.body
     console.log(req.body);
     req.session.user = req.body
     //for params... see line below
     //request.params   = route params

     return res.redirect('/results')
     //save it into sessions
})
app.get('/results', (req, res) =>{
     return res.render('results', { user: req.session.user})
     // return res.render('results')
})
//Step 3  set up port  MUST be at the bottom of the document
app.listen(port, ()  =>  console.log(`listening on port ${port}...`));
