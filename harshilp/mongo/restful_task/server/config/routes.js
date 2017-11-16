var taskController = require('../controllers/task');

module.exports = app => {
    app
        .get('/tasks', taskController.index)
        .get('/tasks/:id', taskController.show)
        .post('/tasks', taskController.new)
        .put('/tasks/:id', taskController.update)
        .delete('/tasks/:id', taskController.remove)        
}