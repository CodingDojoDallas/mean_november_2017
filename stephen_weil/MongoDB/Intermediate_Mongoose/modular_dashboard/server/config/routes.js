var mongoose = require('mongoose');
var Fox = mongoose.model('Fox');
var foxes = require('../controllers/foxes.js');

module.exports = function(app) {
    app.get("/", function(req, res) {
        foxes.show_all(req, res);
    });
    
    app.get("/delete/:fox_species", function(req, res) {
        foxes.delete(req, res);
    });
    
    app.get("/view/:fox_species", function(req, res) {
        foxes.show_one(req, res, "fox");
    });
    
    app.get("/edit/:fox_species", function(req, res) {
        foxes.show_one(req, res, "edit");
    });
    
    app.get("/new", function(req, res) {
        res.render("new");
    });
    
    app.post("/add_fox", function(req, res) {
        foxes.create(req, res);
    });
    
    app.post("/edit_fox/:fox_species", function(req, res) {
        foxes.edit(req, res);
    });    
}
