var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quoting_dojo");

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1, maxlength: 40},
    quote: {type: String, required: true, minlength: 1, maxlength: 500}
}, {timestamps: true});
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: "490jnfasmi010fas",
    resave: true,
    saveUninitialized: true
}));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/add_quote", function(req, res) {
    var quote = new Quote(req.body);
    quote.save(function(err) {
        if (err) {
            console.log("****************");
            console.log(err);
            console.log("****************");
            console.log(quote.errors);
            res.render("index", {errors: quote.errors});
        }
        else {
            res.redirect("/quotes");
        }
    });
});

app.get("/quotes", function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            res.render("quotes", {errors: err});
        }
        else {
            res.render("quotes", {quotes: quotes});
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});