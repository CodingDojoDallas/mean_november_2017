module.exports = function(app){
	
	var Quote = require("./models/quote")
	
	app.get('/', index)
	
	app.get('/quotes', show_quotes)
	
	app.post('/process', create_quote)
	
	
	function index (req, res) {
		context = {errors: req.session.errors}
		delete req.session.errors;
		res.render("index", context )
	}
	
	function show_quotes (req, res){
		Quote.find({}).sort({createdAt: -1}).exec((err, quotes) => {
			if (err){
				console.log(err)
			}
			res.render("quotes",{quotes, quotes});
		})
	}

	function create_quote (req, res) {
		
		var quote = new Quote({name: req.body.name, quote: req.body.quote});
		
		quote.save(function(err) {
			if(err) {				
				req.session.errors = quote.errors
				res.redirect('/');
			} 
			else {
				res.redirect('/quotes');
			}
		})
	}
}