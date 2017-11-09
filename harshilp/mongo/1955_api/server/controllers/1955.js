var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    index: function (req, res) {
        Person.find({}, function (err, people) {
            if (err) {
                console.log(err);
            } else {
                res.json(people);
            }
        });
    },
    new: function (req, res) {
        var person = new Person(req.params);
        person.save(function (err) {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/')
            }
        });
    },
    remove: function (req, res) {
        Person.remove({name: req.params.name }, function(err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');        
        });
    },
    show: function (req, res) {
        Person.findOne({ name: req.params.name }, function (err, person) {
            if (err) {
                console.log(err);
            } else {
                res.json(person);
            }
        });
    },
};

