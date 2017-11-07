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
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: {type:String,required: true},
    email: {type:String,required:true},
   })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') 



app.get('/',function(request,response){
    console.log(request.session.errors);
    response.render('index',{errors: request.session.errors});
});

app.get('/users',function(request,response){
    User.find({}, function(error,users){
        response.render('users', {users : users})
    })
});


app.post('/result',function(request,response){
    var user = new User(request.body)
    user.save(function(error){
        if(error){
            request.session.errors = user.errors;
            response.redirect('/')
        }
        else{
        response.redirect('/users')
        }        
    });
});

app.listen(6789, function(){
	console.log("listening on port 6789");
})