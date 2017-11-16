var mongoose = require('mongoose');

//var Pack = mongoose.model('Pack');

var animals = require('../controllers/animals.js')

module.exports = function(app) {
    app.get('/', animals.show_all); //route route should be basic
    
    app.get('/animals/new', function(req, res) {
        res.render('new'); //if rendering with nothing special, do in route
    })

}