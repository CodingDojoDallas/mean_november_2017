var router = require('../named_routes'),
	User = require('../models/users'),
	flash = require('../flash'),
	bcrypt = require('bcrypt-as-promised');
module.exports = {
	is_logged_in: (req, res, next) => {
		if (req.session.user_id)
			next();
		else{
			console.log("rejected");
			res.redirect('/login');
		}
	},

	'new': (req,res) =>{
		
		res.render('session/new', {router:router, errors : flash.get_flashed_messages(req) });
	},
	create: (req,res) => {
		if(req.body.email == ""){
			flash.flash_errors(req,{message: "email can not be empty"});
			return res.redirect(router('login'));
		}
		if (req.body.password == ""){
			flash.flash_errors(req,{message: "password can not be empty"});
			return res.redirect(router('login'));
		}

		req.body.email = req.body.email.toLowerCase();
		User.findOne({email: req.body.email}, (err,user) =>{			
			if (!user){
				flash.flash_errors(req,{message: "email not found"});
				return res.redirect(router('login'));
			}
			bcrypt.compare(req.body.password, user.password)
			.then(() => {
				console.log('password matches')
				
				req.session.user_id = user._id;
				
				return res.redirect(router('dashboard'))
			})
			.catch((x) => {
				
				flash.flash_errors(req,{message: "incorrect password"});
				return res.redirect(router('login'))
			})
		})
	},
	destroy: (req, res) => {
		delete req.session.user_id
		return res.redirect(router('login'));
	}
	
	
}