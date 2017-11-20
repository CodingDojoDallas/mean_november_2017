var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      session       = require('express-session'),
      mongoose      = require('mongoose'),

      app           = express(),
      routes        = require('./server/config/routes.js'),
      port          = 8000;

routes(app)

app.use(session({
  secret: 'secretpassword',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Setting our Server to Listen on Port: 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
