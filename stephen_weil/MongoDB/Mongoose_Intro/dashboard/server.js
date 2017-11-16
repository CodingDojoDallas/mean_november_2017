var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dashboard");

var FoxSchema = new mongoose.Schema({
    genus: {type: String, required: true, minlength: 5, maxlength: 9},
    species: {type: String, required: true, minlength: 3, maxlength: 30},
    habitats: {type: Array, default: []},
    description: {type: String}
}, {timestamps: true});

mongoose.model("Fox", FoxSchema);
var Fox = mongoose.model("Fox");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: "fjias891z0zn0fj01",
    resave: true,
    saveUninitialized: true
}));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    Fox.find({}, function(err, foxes) {
        if (err) {
            return res.render("index");
        }
        else {
            return res.render("index", {foxes: foxes});
        }
    });
});

app.get("/delete/:fox_species", function(req, res) {
    Fox.remove({species: req.params.fox_species}, function(err) {
        if (err) {
            console.log(err);
        }
        return res.redirect("/");
    });
});

app.get("/view/:fox_species", function(req, res) {
    var fox = Fox.find({species: req.params.fox_species}, function(err, fox) {
        if (err) {
            return res.redirect("/");
        }
        else {
            return res.render("fox", {fox: fox[0]});
        }
    });
});

app.get("/edit/:fox_species", function(req, res) {
    var fox = Fox.find({species: req.params.fox_species}, function(err, fox) {
        if (err) {
            return res.redirect("/");
        }
        else {
            return res.render("edit", {fox: fox[0]});
        }
    });
});

app.get("/new", function(req, res) {
    res.render("new");
});

app.post("/add_fox", function(req, res) {
    // taking comma-separated list, breaking into array
    var habitats = req.body.habitats.split(',');
    req.body.habitats = [];
    for (var i=0, len=habitats.length; i<len; i++) {
        req.body.habitats.push(habitats[i]);
    }
    var fox = new Fox(req.body);
    fox.save(function(err) {
        if (err) {
            res.redirect("/new");
        }
        else {
            res.redirect("/");
        }
    });
});

app.post("/edit_fox/:fox_species", function(req, res) {
    var fox = Fox.find({species: req.params.fox_species}, function(err, fox) {
        if (err) {
            return res.redirect("/");
        }
        else {
            for (var key in fox[0]) {
                if (req.body[key] === "" || req.body[key] === "undefined") {
                    req.body[key] = fox[0][key];
                }
            }
            Fox.update({species: req.params.fox_species}, {genus: req.body.genus, species: req.body.species, habitats: req.body.habitats, description: req.body.description}, function(err) {
                if (err) {
                    return res.redirect("/edit/" + req.params.fox_species);
                }
                else {
                    return res.redirect("/view/" + req.params.fox_species);
                }
            });
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});