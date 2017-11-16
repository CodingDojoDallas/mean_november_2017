var mongoose = require('mongoose');
var Person = require('../models/person');

module.exports = {
	all: function(req, res) {
		var people = Person.find({}, function(err, people) {
			if(err) {
				console.log('unable to get people')
			}
			else {
				res.json({people:people})
			}
		})
	},

	add: function(req, res) {
		var person = new Person({name: req.params.name, year:1955})
		person.save(function(err) {
			if(err){
				console.log('something went wrong trying to save person')
			} 
			else {
				res.json({person:person})
			}
		})
	},

	delete: function(req, res) {
		Person.remove({name: req.params.name}, function(err){
			if (err){
				console.log('unable to remove')
			}
			else {
				res.redirect('/')
			}
		})
	},

	show: function(req, res) {
		var person = Person.findOne({name: req.params.name}, function(err, person){
			if (err){
				console.log('something went wrong getting person')
			}
			else {
				res.json({person:person})
			}
		})
	}
}
