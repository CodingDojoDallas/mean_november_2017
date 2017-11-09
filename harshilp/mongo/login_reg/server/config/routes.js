var userController = require('../controllers/user');

module.exports = app => {
    app
        .get('/', userController.index)
        .post('/login', userController.login)
        .post('/register', userController.register)
        .get('/home', userController.home)
}