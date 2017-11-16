var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    show_all: function(req, res) {
        Person.find({}, function(err, people) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json(people);
            }
        });
    },
    show_one: function(req, res) {
        var person = Person.find({name: req.params.name}, function(err, person) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json(person);
            }
        });
    },
    create: function(req, res) {
        var person = new Person({name: req.params.name});
        person.save(function(err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.redirect("/");
            }
        });
    },
    remove: function(req, res) {
        Person.remove({name: req.params.name}, function(err) {
            if (err) {
                console.log(err);
            }
            return res.redirect("/");
        });
    }
};