var router = require('../named_routes'),
	User = require('../models/users'),
	flash = require('../flash'),
	bcrypt = require('bcrypt-as-promised');

module.exports = {
	index: (req,res) => {
		var current_user = User.findOne({_id: req.session.user_id }, (err,current_user) => {
			if (err){
				//idk
			}
			if (!current_user){
				return res.redirect(router('login'));
			}
			User.find({},(err,users) => {
				return res.render('user/index', {router:router, users: users, current_user: current_user})
			})
		})
		
	},
	'new': (req,res) => {
		
		res.render('user/new', {router:router, errors: flash.get_flashed_messages(req)});
	},
	create: (req,res) => {
		if (req.body.password != req.body.password_confirmation || req.body.password == ""){
			console.log(req.body.password, req.body.password_confirmation)
			flash.flash_errors(req,{message: "paswords don't match"});
			return res.redirect(router('registration'));
		}
		var user = new User().create_user_from_data(req.body);
		
		user.save((err) => {
			if (err){
				console.log(err);
				flash.flash_messages(req, err);
				return res.redirect(router('registration'));
			}
			req.session.user_id = user._id;
			return res.redirect(router('show_user', {id: user._id}));
		});
		
	},
	show: (req, res) => {
		User.findOne({_id: req.params.id},(err,user) => {
			if (err){
				return res.redirect(router('dashboard'));
			}
			else{
				return res.render('user/show', {router: router, user: user});
			}
		})
	}
}