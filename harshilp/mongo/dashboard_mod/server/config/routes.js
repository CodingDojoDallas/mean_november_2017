var kittenController = require('../controllers/kitten');

module.exports = app => {
    app
        .get('/', kittenController.index)
        .get('/litter/new', kittenController.new)
        .get('/litter/show/:id', kittenController.show)
        .post('/litter', kittenController.save)
        .get('/litter/edit/:id', kittenController.edit)
        .get('/litter/destroy/:id', kittenController.remove)
        .post('/litter/:id', kittenController.update)
}