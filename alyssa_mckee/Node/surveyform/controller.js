module.exports = function(app){

	app.get('/result', function(req, res) {
		
		
		res.render("result", req.session.data);
	})

	// post route for adding a user
	app.post('/process', function(req, res) {
		console.log("POST DATA", req.body);
		req.session.data = req.body;
		res.redirect('/result');
	})
	
	app.get('/', index)
	
	function index (req, res){
		console.log("hello")
		
		res.render("index");
	}

}