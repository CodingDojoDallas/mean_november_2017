
var Pack = require('../models/animal.js');

module.exports = {
    show_all: function(req,res){
        Pack.find({},function(err,animals){
            var animals = animals;
            res.render('index', {animals:animals}); //make sure the render is IN the function ALWAYS due to scope and shit
        })
    }
}