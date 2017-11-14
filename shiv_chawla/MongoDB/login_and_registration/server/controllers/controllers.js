//bring in the model that was exported from your models file
var User = require('../models/model.js');

//export all your controller functions from the model
module.exports = {
    index: function(req,res){
        var err = ['wront shit'];
        res.render('index'); //make sure the render is IN the function ALWAYS due to scope and shit
    },
    create: function(req,res){
        console.log("POST DATA", req.body);
        var new_user = new User(req.body);
        new_user.save(function(err){
            if(err){
                console.log('err');
            }else{
                console.log('success');
                res.redirect('/');
            }
        })
    },
    show_all: function(req,res){
        console.log('these are the admins');
        User.find({},function (err,people){
            res.render('users',{people:people});
        })
    },
    login: function(req,res){
        User.find({email:req.body.email},function(err,person){
            if(person == false){
                var err = [];
                err.push("Username and/or password are invalid. Please try again bro")
                res.render('index', {err: err} ) //push shit to session and redirect after you dl session
            }
            else{
                console.log('good')
            }
        })
    }
}