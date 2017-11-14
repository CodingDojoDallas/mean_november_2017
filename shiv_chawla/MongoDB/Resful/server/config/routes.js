var mongoose = require('mongoose');

//var Pack = mongoose.model('Pack');

var tasks = require('../controllers/tasks.js')

module.exports = function(app) {
    app.get('/', tasks.show_all); //basic bitch
    app.get('/:id', tasks.show_specific);
    app.post('/new', tasks.add);
    app.post('/update/:id', tasks.update)
    app.get('/delete/:id', tasks.delete)

}