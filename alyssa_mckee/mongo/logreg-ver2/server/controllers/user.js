var router = require('../named_routes'),
	User = require('../models/users'),
	flash = require('../flash'),
	bcrypt = require('bcrypt-as-promised');


module.exports = {
	index: (req,res) => {
		current_user(req)
		.then((current_user)=>{
			User.find({},(err,users) => {
				return res.render('user/index',{users: users, current_user: current_user, router: router});
			})
		})
		.catch((err)=>{
			console.log(err);
			return res.redirect(router('login'));
		})
	},
	'new': (req,res) => {
		res.render('user/new', {errors: flash.get_flashed_messages(req), router: router});
	},
	'create': (req,res) => {
		if (req.body.password != req.body.password_confirmation || req.body.password == ""){
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
		current_user(req)
		.then((current_user)=>{
			User.findOne({_id: req.params.id},(err,user) => {
				if (err){
					return res.redirect(router('dashboard'));
				}
				else{
					return res.render('user/show', {user:user, router: router});
				}
			})
		})
		.catch((err)=>{
			return res.redirect(router('login'));
		})
	}
}