var mongoose = require('mongoose');

//var Pack = mongoose.model('Pack');

var olds = require('../controllers/olds.js')

module.exports = function(app) {
    app.get('/', olds.show_all); //basic bitch
    
    app.get('/new/:name/', olds.add); //add old dude

    app.get('/remove/:name/', olds.remove) //kill a dude

    app.get('/:name/', olds.show_one)
}