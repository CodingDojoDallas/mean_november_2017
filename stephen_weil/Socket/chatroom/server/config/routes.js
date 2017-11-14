var mongoose = require('mongoose');

// import controllers
var users = require('../controllers/users.js');

module.exports = function(app) {
    app.get("/", function(req, res) {
        var errors;
        if ('errors' in req.session) {
            errors = req.session.errors;
            delete req.session['errors'];
        }
        if (!req.session.hasOwnProperty('status')) {
            req.session.status = "";
        }
        return res.render("index", {errors: errors, status: req.session.status});
    });

    app.get("/dashboard", function(req, res) {
        if ('user' in req.session) {
            users.show_all(req, res);
        }
        else {
            return res.redirect("/");
        }
    });

    app.get("/logout", function(req, res) {
        delete req.session.user;
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