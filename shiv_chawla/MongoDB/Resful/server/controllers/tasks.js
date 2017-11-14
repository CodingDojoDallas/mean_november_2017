
var Task = require('../models/task.js');

module.exports = {
    show_all: function(req,res){
        Task.find({},function(err,tasks){
            res.json(tasks);
        })
    },
    add: function(req,res){
        var task = new Task(req.body);
        task.save(function(err){
            res.redirect('/');
        })
    },
    show_specific: function (req,res){
        Task.find({_id: req.params.id},function(err,task){
            res.json(task);
        })
    },
    update: function(req,res){
        Task.update({_id: req.params.id}, req.body, function(err){
            res.redirect('/')
        })
    },
    delete: function(req,res){
        Task.remove({_id: req.params.id},function(err){
            res.redirect('/');
        })
    }
}