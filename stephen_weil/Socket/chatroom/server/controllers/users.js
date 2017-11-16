var mongoose = require('mongoose');
// import packages
var bcrypt = require('bcrypt-as-promised');

// import models
var User = mongoose.model('User');

module.exports = {
    show_all: function(req, res) {
        User.find({}, function(err, users) {
            if (err) {
                return res.redirect("/");
            }
            else {
                return res.render("dashboard", {users: users, user: req.session.user});
            }
        });
    },
    create: function(req, res) {
        req.session.status = "register";
        if (req.body.password === req.body.confirm) {
            delete req.body.confirm;
            bcrypt.hash(req.body.password, 10).then(function(hashed_password) {
                req.body.password = hashed_password;
                var user = new User(req.body);
                user.save(function(err) {
                    if (err) {
                        if (err.name === "MongoError") {
                            req.session.errors = "That username is already registered.";
                        }
                        else {
                            req.session.errors = err;
                        }
                        return res.redirect("/");
                    }
                    else {
                        req.session.user = user;
                        return res.redirect("/dashboard");
                    }
                });
            }).catch(function(err) {
                console.log(err);
                return res.redirect("/");
            });
            
        }
        else {
            req.session.errors = "Password did not match confirmation.";
            return res.redirect("/");
        }
    },
    login: function(req, res) {
        var user = User.findOne({username: req.body.username}, function(err, user) {
            req.session.status = "login";
            if (err || user === null) {
                req.session.errors = "Invalid login information.";
                return res.redirect("/");
            }
            bcrypt.compare(req.body.password, user.password).then(function(){
                req.session.user = user;
                return res.redirect("/dashboard");
            }).catch(function(err) {
                req.session.errors = "Invalid login information.";
                console.log(err);
                return res.redirect("/");
            });
        });
    }
};