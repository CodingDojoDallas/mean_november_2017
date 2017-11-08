var mongoose = require('mongoose');
var Fox = mongoose.model('Fox');

module.exports = {
    show_all: function(req, res) {
        Fox.find({}, function(err, foxes) {
            if (err) {
                return res.render("index");
            }
            else {
                return res.render("index", {foxes: foxes});
            }
        });
    },
    show_one: function(req, res, view) {
        var fox = Fox.find({species: req.params.fox_species}, function(err, fox) {
            if (err) {
                return res.redirect("/");
            }
            else {
                return res.render(view, {fox: fox[0]});
            }
        });
    },
    create: function(req, res) {
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
    },
    edit: function(req, res) {
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
                var habitats = req.body.habitats.split(',');
                req.body.habitats = [];
                for (var i=0, len=habitats.length; i<len; i++) {
                    req.body.habitats.push(habitats[i]);
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
    },
    delete: function(req, res) {
        Fox.remove({species: req.params.fox_species}, function(err) {
            if (err) {
                console.log(err);
            }
            return res.redirect("/");
        });
    },

}