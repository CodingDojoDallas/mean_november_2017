//***** Step 1 *******
//require npm modules
var express     = require('express'),
    session     = require('express-session'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    routes      = require('./server/config/routes.js'),
    port        = 8000,
//invoke express
    app         = express();
    // console.log(routes.toString());
// this is the MEAN version of rake routes
// console.log(routes.toString());
require('./server/config/mongoose.js');

// ****  POST request helper  ****
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//****  static content ****
app.use(express.static(path.join(__dirname, '/client/static')));

app.set('views', path.join(__dirname,'/client/views'));

app.set('view engine', 'ejs');


routes(app);

//***** Step 3 *******
//set up port MUST be at the bottom of the document!
app.listen(port, () => console.log(`listening on port ${port}...`));
