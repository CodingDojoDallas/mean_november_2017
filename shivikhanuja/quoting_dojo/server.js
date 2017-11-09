var express = require("express");
var session = require('express-session');

var app = express();
var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(express.static(__dirname +'/static'));
var path = require('path');
var mongoose = require('mongoose');

app.set('views',__dirname + '/views');

app.set('view engine' ,'ejs');
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: {type:String,required: true},
    quote: {type:String,required: true},
   }, {timestamps: true})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') 



app.get('/',function(request,response){
    console.log(request.session.errors);
    response.render('index',{errors: request.session.errors});
});

app.get('/quotes',function(request,response){
    Quote.find({}, function(error,quotes){
        response.render('quotes', {quotes : quotes})
    });
});


app.post('/result',function(request,response){
    var quote = new Quote(request.body)
    quote.save(function(error){
        if(error){
            request.session.errors = quote.errors;
            response.redirect('/')
        }
        else{
        response.redirect('/quotes')
        }        
    });
});


app.listen(6789, function(){
	console.log("listening on port 6789");
})