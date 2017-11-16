var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                console.log(err);
            } else {
                res.json(tasks);
            }
        });
    },
    new: function (req, res) {
        console.log('BODY' + req.body.title)
        var task = new Task({title: req.body.title, completed: req.body.completed});
        task.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/tasks');
            }
        });
    },
    remove: function (req, res) {
        Task.remove({_id: req.params.id }, function(err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/tasks');        
        });
    },
    show: function (req, res) {
        Task.findOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                console.log(err);
            } else {
                res.json(task);
            }
        });
    },
    update: function (req, res) {
        Task.update({_id: req.params.id}, req.body, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/tasks/' + req.params.id);
            }
        });
    }
};

