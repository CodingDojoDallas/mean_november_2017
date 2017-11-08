var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-as-promised');

module.exports = {
    show_all: function(req, res) {
        User.find({}, function(err, users) {
            if (err) {
                return res.redirect("/");
            }
            else {
                return res.render("success", {users: users, logged_in_user: req.session.logged_in_user, status: req.session.status});
            }
        });
    },
    login: function(req, res) {
        var user = User.findOne({email: req.body.email}, function(err, user) {
            req.session.status = "login";
            if (err || user === null) {
                req.session.errors = "Invalid login information.";
                return res.redirect("/");
            }
            bcrypt.compare(req.body.password, user.password).then(function(){
                req.session.logged_in_user = user;
                return res.redirect("/success");
            }).catch(function(err) {
                console.log(err);
                return res.redirect("/");
            });
        });
    },
    create: function(req, res) {
        req.session.status = "register";
        if (req.body.password === req.body.confirm) {
            delete req.body.confirm;
            req.body.birthday = new Date(req.body.birthday);
            var user = new User(req.body);
            user.save(function(err) {
                if (err) {
                    if (err.name === "MongoError") {
                        req.session.errors = "That email address is already registered.";
                    }
                    else {
                        req.session.errors = err;
                    }
                    return res.redirect("/");
                }
                else {
                    bcrypt.hash(req.body.password, 10).then(function(hashed_password) {
                        user.password = hashed_password;
                        req.session.logged_in_user = user;
                        return res.redirect("/success");
                    }).catch(function(err) {
                        console.log(err);
                        return res.redirect("/");
                    });
                }
            });
        }
        else {
            req.session.errors = "Password did not match confirmation.";
            return res.redirect("/");
        }
    }
};