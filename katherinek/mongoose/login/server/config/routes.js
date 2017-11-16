var mongoose = require('mongoose');
var User = require('../models/user')
var users = require('../controllers/users')

module.exports = (app, req, res) => {

	app.get('/', users.index);

	app.get('/users', users.all);

	app.get('/users/new', users.new);

	app.post('/users', users.create);

	app.get('/users/:id', users.show);

	app.get('/users/:id/edit', users.edit);

	app.post('/update/:id', users.update);

	app.post('/delete/:id', users.delete);

}