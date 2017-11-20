// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');


// We wrap the routes in a function where we can pass in the app as a parameter so that we can set up our routing rules in the routes.js file.
var quotes = require('../controllers/quotes.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })
  app.post('/quotes', (req,res) => {
    quotes.create(req, res)
  })
  app.get('/main',  (req, res) => {
    quotes.show(req, res)
  })
}
