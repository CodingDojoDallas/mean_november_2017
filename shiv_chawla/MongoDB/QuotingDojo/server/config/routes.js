//need to access the app variable from routes.js
var mongoose = require('mongoose'); //bring in mongoose and store as a variable
//var Quote = mongoose.model('Quote') //bring in the model as Quote
var quotes = require('../controllers/quotes')

module.exports = function(app)
{
    app.get('/', function(request, response) {
        response.render('index');
    })

    app.post('/post', function(request, response) {
        quotes.create(request,response);
    })

    app.get('/result',function(request, response){
        quotes.show(request,response);
    })
}