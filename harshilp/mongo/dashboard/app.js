var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dashboard');

var KittenSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2 },
    gender: { type: String, required: true, minlength: 1 },
    color: { type: String, required: true, minlength: 1 }
}, { timestamps: true });

var Kitten = mongoose.model('Kitten', KittenSchema);

app.get('/', function (req, res) {
    Kitten.find({}, function (err, litter) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(litter);
            res.render('index', { litter: litter });
        }
        res.render('index', { litter: litter });
    });
});
app.get('/litter/new', function (req, res) {
    res.render('new');
});

app.get('/litter/show/:id', function (req, res) {
    console.log(req.params.id)
    Kitten.find({ _id: req.params.id }, function (err, kitten) {
        if (err) {
            console.log(err);
        } else {
            console.log(kitten);
        }
        res.render('kitten', { kitten: kitten });
    });
});

app.post('/litter', function (req, res) {
    console.log("POST DATA", req.body);
    var kitten = new Kitten(req.body);
    kitten.save(function (err) {
        if (err) {
            console.log('something went wrong');
            res.redirect('/litter/new');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
        }
    });
    res.redirect('/');
});

app.get('/litter/edit/:id', function (req, res) {
    res.render('edit', { data: req.params.id });
});

app.get('/litter/destroy/:id', function (req, res) {
    Kitten.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect('/');
});

app.post('/litter/:id', function (req, res) {
    Kitten.update({ _id: req.params.id }, { name: req.body.name, gender: req.body.gender, color: req.body.color }, function (err) {
        if (err) {
            console.log(err);
            res.redirect('/litter/' + req.params.id)
        } else {
            res.redirect('/litter/show/' + req.params.id);
        }
    });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
