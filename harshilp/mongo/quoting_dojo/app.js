var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    content: { type: String, required: true, minLength: 10 },
    author: { type: String, required: true, minlength: 2 }
}, { timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/quotes', function (req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(quotes);
            res.render('quotes', {quotes:quotes});
        }
    });
});

app.post('/quotes', function (req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote(req.body);
    quote.save(function (err) {
        if (err) {
            console.log('something went wrong');
            res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
        }
    });
    res.redirect('/quotes');
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
