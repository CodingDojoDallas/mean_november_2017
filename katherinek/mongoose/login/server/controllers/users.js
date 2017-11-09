var mongoose = require('mongoose');
var User = require('../models/user');

module.exports = {
	index: function(req, res){
		res.render('users/index')
	},

	all: function(req, res){
		users = User.find({}, function(err, users){
			if(err){
				console.log('unable to get users');
			}
			else {
				res.render('users/users', {users:users})
			}
		})
	},

	new: function(req, res){
		res.render('users/new_user')
	},

	create: function(req, res){
		user = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
			dob: req.body.date
		});
		user.save(function(err) {
			if (err){
				console.log('trouble saving user')
			}
			else {
				// LOGIN 
			}
		})
	},

	show: function(req, res){
		user = User.findOne({_id: req.params.id}, function (err, user){
			if (err){
				console.log('error finding person')
			}
			else {
				res.render('users/user', {user:user})
			}
		})
	},

	edit: function(req, res){
		user = User.findOne({_id: req.params.id}, function (err, user){
			if (err){
				console.log('error finding person')
			}
			else {
				res.render('users/edit_user', {user:user})
			}
		})
	},

	update: function(req, res){
		User.update({_id: req.params.id}, req.body, function(err, user){
			if(err){
				console.log('error updating user')
			}
			else {
				res.redirect(`/users/${req.params.id}`)
			}
		})
	},

	delete: function(req, res){
		User.remove({_id: req.params.id}, function(err){
			if(err){
				console.log('error deleting user')
			}
			else {
				res.redirect(`/users`)
			}
		})
	}
}