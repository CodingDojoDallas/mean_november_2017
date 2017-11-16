var mongoose = require('mongoose');
var Quote = mongoose.model('Quote')

module.exports = {
    show: function(request,response){
        Quote.find({}, function(err,quotes){
            response.render('../views/result', {quotes:quotes})
        })
    },
    create: function(request, response){
        console.log(request.body)
        var quote = new Quote(request.body);
        quote.save(function(err){
            if(err){//instead of console logging, we should return response.render('index' with an object created of errors)
                console.log("Error route")
                response.redirect('/result')

            } else {
                response.redirect('/result')
            }
        })
    }
}



