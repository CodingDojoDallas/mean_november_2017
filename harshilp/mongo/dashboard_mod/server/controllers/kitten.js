var mongoose = require('mongoose');
var Kitten = mongoose.model('Kitten');

module.exports = {
    index: function (req, res) {
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
    },
    new: function (req, res) {
        res.render('new');
    },
    show: function (req, res) {
        Kitten.find({ _id: req.params.id }, function (err, kitten) {
            if (err) {
                console.log(err);
            } else {
                console.log(kitten);
            }
            res.render('kitten', { kitten: kitten });
        });
    },
    save: function (req, res) {
        var kitten = new Kitten(req.body);
        kitten.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.redirect('/litter/new');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a quote!');
                res.redirect('/');
            }
        });
    },
    edit: function (req, res) {
        res.render('edit', { data: req.params.id });
    },
    remove: function (req, res) {
        Kitten.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    },
    update: function (req, res) {
        Kitten.update({ _id: req.params.id }, { name: req.body.name, gender: req.body.gender, color: req.body.color }, function (err) {
            if (err) {
                console.log(err);
                res.redirect('/litter/' + req.params.id)
            } else {
                res.redirect('/litter/show/' + req.params.id);
            }
        });
    }
};