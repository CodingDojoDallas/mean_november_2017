var personController = require('../controllers/1955');

module.exports = app => {
    app
        .get('/', personController.index)
        .get('/new/:name', personController.new)
        .get('/remove/:name', personController.remove)
        .get('/:name', personController.show)
}