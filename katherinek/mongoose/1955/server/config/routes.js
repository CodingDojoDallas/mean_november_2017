var mongoose = require('mongoose');
var people = require('../controllers/people')

module.exports = function(app) {
	app.get('/', function (req, res) {
		people.all(req, res)
	});

	app.get('/new/:name', function (req, res) {
		people.add(req, res)
	});

	app.get('/remove/:name', function (req, res) {
		people.delete(req, res)
	});

	app.get('/:name', function (req, res) {
		people.show(req, res)
	});

}