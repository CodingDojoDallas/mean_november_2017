var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users.js');

module.exports = function(app) {
    app.get("/", function(req, res) {
        var errors;
        if ('errors' in req.session) {
            errors = req.session.errors;
            delete req.session['errors'];
        }
        return res.render("index", {errors: errors, status: req.session.status});
    });

    app.get("/success", function(req, res) {
        if ('logged_in_user' in req.session) {
            users.show_all(req, res);
        }
        else {
            return res.redirect("/");
        }
    });

    app.get("/logout", function(req, res) {
        delete req.session.logged_in_user;
        delete req.session.status;
        return res.redirect("/");
    });

    app.post("/register", function(req, res) {
        users.create(req, res);
    });

    app.post("/login", function(req, res) {
        users.login(req, res);
    });
};