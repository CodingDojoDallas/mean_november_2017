
var Old = require('../models/old.js');

module.exports = {
    show_all: function(req,res){
        Old.find({},function(err,people){
            console.log(people)
            console.log("old people foudn")
            res.json(people);
        })
    },
    add: function(req,res){
        console.log(req.params.name)
        var person = new Old({name: req.params.name});
        //person.name = req.params.name;
        person.save(function(err){
            res.redirect('/');
        })
    },
    remove: function(req,res){
        Old.remove({name:req.params.name},function(err){
            res.redirect('/')
        })
    },
    show_one: function(req,res){
        Old.find({name:req.params.name},function(err,person){
            res.json(person)
        })
    }
}