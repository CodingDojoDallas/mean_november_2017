var mongoose = require('mongoose');

//var Pack = mongoose.model('Pack');

var animals = require('../controllers/animals.js')

module.exports = function(app) {
    app.get('/', animals.show_all);
    
    app.get('/animals/new', function(req, res) {
        res.render('new');
    })
    
    app.post('/animals', animals.create);
    
    app.post("/animals/destroy/:id", animals.delete);
    
    app.get("/animals/:id", animals.show_specific);
    
    app.post("/animals/:id", function (req, res){
        animals.update(req,res)
    });
    
    app.get("/animals/edit/:id", function (req, res){
        animals.auto_complete_for_edit(req,res)
    });
}