//bring in mongoose
var mongoose = require('mongoose');

//bring in the controllers that were exported and save as a variable
var controllers = require('../controllers/controllers.js')

//export your routes as a FUNCTION so that we can eventually pass app into it
module.exports = function(app) {
    app.get('/', controllers.index); //basic bitch still takes a function
    app.post('/register', controllers.create);
    app.get('/users', controllers.show_all);
    app.post('/login',controllers.login);
    
}