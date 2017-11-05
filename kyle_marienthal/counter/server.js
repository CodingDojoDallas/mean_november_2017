//require npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;


let app = express();

//set up middleware
app.set('view engine', 'ejs');//sets the view engine to ejs
app.set('views', __dirname + '/views');//sets the views directory (a path pointing to this folder)

////static content
app.use(express.static(__dirname + '/static'));

////POST request helper
app.use(bodyParser.urlencoded({ extended: true }));

////session
app.use(session({
  secret: "anytstringyouwantgoeshere",
  resave: false,
  saveUninitialized: true,
}));

////routes
app.get('/', (req, res) => {
if(!req.session.count){
  req.session.count = 1;
}
else{
  req.session.count++;
}
  res.render('index', { count: req.session.count })
});

app.get('/plus2', (req, res) => {
  req.session.count++;
  res.redirect('/');
})
app.get('/reset', (req, res) => {
  req.session.count = 0;
  res.redirect('/');
})


app.listen(port, () => console.log(`listening on port ${port}`));
