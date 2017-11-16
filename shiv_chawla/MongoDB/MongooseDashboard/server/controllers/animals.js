
var Pack = require('../models/animal.js');

module.exports = {
    show_all: function(req,res){
        Pack.find({},function(err,animals){
            var animals = animals;
            res.render('index', {animals:animals}); //make sure the render is IN the function ALWAYS due to scope and shit
        })
    },
    create: function(req,res){
        console.log("POST DATA", req.body);
        var pack = new Pack({name: req.body.name,color: req.body.color})
        pack.save(function(err){
            if(err){
                console.log('err');
            } else{
                console.log('success');
                res.redirect('/');
            }
        })
    },
    delete: function(req,res){
        id = req.params.id;
        console.log(id);
        Pack.remove({_id: id},function(err){
            res.redirect('/'); //make sure the render is IN the function ALWAYS due to scope and shit
        })
    },
    show_specific: function(req,res){
        id = req.params.id;
        Pack.find({_id:id},function(err,animal){
            res.render('animal', {animal:animal});
        })
    },
    update: function(req,res){
        id = req.params.id;
        console.log(id)
        name = req.body.name;
        console.log(name)
        color = req.body.color;
        console.log(color)
        Pack.update({_id:id}, {name:name,color:color} ,function(err){
            res.redirect('/')
        })
    },
    auto_complete_for_edit: function(req,res){
        id = req.params.id;
        Pack.find({_id:id},function(err,animal){
            console.log(id);
            res.render('edit', {animal:animal});
        })
    }
}