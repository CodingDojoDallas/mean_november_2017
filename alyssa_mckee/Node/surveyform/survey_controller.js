var named_routes = require("./named_routes")

module.exports = {
	
	index: (req, res) => {
		console.log("hello")
		
		res.render("index");
	},
	
	result: (req, res) => {
		res.render("result", req.session.data);
		
	},
	
	process: (req, res) => {
		console.log("POST DATA", req.body);
		req.session.data = req.body;
		res.redirect(named_routes.result_path);
		
	}
}