var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    login: function (req, res) {
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) {
                console.log(err);
                return res.redirect('/')
            } else {
                user.validatelogin(req.body.password, function(err, match) {
                    if (match) {
                        req.session.user_id = user._id;
                        return res.redirect('/home');      
                    }             
                });
            }
        });
    },
    register: function (req, res) {
        if (req.body.password === req.body.cpassword) {
            var user = new User(req.body);
            console.log(user);
            user.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    req.session.user_id = user._id;
                    return res.redirect('/home')
                }
            });
        } else {
            return res.redirect('/')            
        }
    },
    home: function (req, res) {
        User.findOne({_id: req.session.user_id}, function(err, user) {
            if (err) {
                console.log(err)
                return res.redirect('/')
            } else {
                res.render('home', {user:user});
            }
        });
    }
};

