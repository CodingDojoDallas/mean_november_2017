var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render("index");
  })
  app.get('/quotes', function(req,res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
  })
  app.post('/main', function (req, res) {
    Quote.find({}, function (err, quotes){
      res.render('main', {quotes:quotes});  
    });
  })
}