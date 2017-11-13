//require npm modules
var express     = require('express'),
    session     = require('express-session'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    routes      = require('./server/config/routes.js'),
    port        = 8000,
    //invoke express
    app         = express();
    require('./server/config/mongoose.js'),
    // ****  session  ****
    app.use(session({
        secret:'secretpassword',
        proxy: true,
        resave: false,
        saveUninitialized: true,
    }));

    app.use( (req, res, next) => {
    if (req.query._method === 'DELETE') {
        req.method = 'DELETE';
        req.url = req.path;
    }
    next();
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/client/static')));

app.set('views', path.join(__dirname, '/client/views'));

app.set('view engine', 'ejs');


routes(app);
//***** Step 3 *******
//set up port MUST be at the bottom of the document!
app.listen(port, () => console.log(`listening on port ${port}...`));
