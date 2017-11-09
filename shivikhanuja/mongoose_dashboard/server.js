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
mongoose.connect('mongodb://localhost/puppy_dashboard');

var PuppySchema = new mongoose.Schema({
    name: {type:String, required: true},
    about: {type:String, required: true},
    color: {type:String, required: true},
    city: {type:String, required: true},
   })
mongoose.model('Puppy', PuppySchema); // We are setting this Schema in our Models as 'Puppy'
var Puppy = mongoose.model('Puppy') 


app.get('/',function(request,response){
    console.log(request.session.errors);
    response.render('new',{errors: request.session.errors});
});

app.get('/show',function(request,response){
    Puppy.find({}, function(error,puppys){
        response.render('show', { puppys : puppys });
    });
});
app.get('/index/:id',function(request,response){
    Puppy.findOne({ _id: request.params.id }, function(error,puppy){
        response.render('index', { puppy : puppy });
    });
});

app.post('/result',function(request,response){
    var puppy = new Puppy(request.body)
    puppy.save(function(error){
        if(error){
            request.session.errors = puppy.errors;
            response.redirect('/')
        }
        else{
        response.redirect('/show')
        }        
    });
});
app.get('/:id/edit/', function(request, response){
    Puppy.find({ _id: request.params.id }, function(error, puppy) {
      if (error) { console.log(error); }
      response.render('edit', { puppy: puppy[0] });
    })
  });
  
  // Update
app.post('/:id', function(request, response){
Puppy.update({ _id: request.params.id }, request.body, function(error, result){
    if (error) { console.log(error); 
    response.redirect('/');
    }
    else{
    response.redirect('/show')
    }
})

});


app.listen(6789, function(){
	console.log("listening on port 6789");
})
