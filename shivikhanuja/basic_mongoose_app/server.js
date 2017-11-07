var express = require("express");

var app = express();
var bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/static'));
var path = require('path');
var mongoose = require('mongoose');

app.set('views',__dirname + '/views');

app.set('view engine' ,'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
   })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
   


app.get('/',function(request,response){
    response.render('index');
});

app.get('/users',function(request,response){
    User.find({}, function(error,users){
        response.render('users', {users : users})
    })
});

app.post('/path',function(request,response) {
    //console.log("POST DATA \n\n", request.body);
    var user  = new User(request.body)
    user.save(function(error){
        response.redirect('/users')
    });
});



app.listen(6789, function(){
	console.log("listening on port 6789");
})