
////////////////////////shit that you require//////////////////
var express = require('express')
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
///////////connect to the db//////////////
mongoose.connect('mongodb://localhost/messageboard');

////////join your folders and add ejs//////////
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

///////////////new schema variable to bring objectID attributes/////////
var Schema = mongoose.Schema; //make this so that models understand objectID attributes

////////////schema for message//////////////////
var MessageSchema = new mongoose.Schema({
    name: { type: String, minlength: 4, required: true },
    message: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId , ref: 'Comment'}] //the type is the object id, ref tells it WHICH cschema to look for
    //this is a one to MANY because comments are in an array
}, { timestamps: true}); //the type property of the object inside 
//of the array is an attribute that tells Mongoose what to look for
var Message = mongoose.model('Message', MessageSchema) //this connects the message with it's schema


var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref:'message'}, //since this is a reference to ANOTHER model, dunderscore and NOT in an array
    comment: { type: String, required: true },
    name: { type: String, minlength: 4, required: true }
}, {timestamps: true });

var Comment = mongoose.model('Comment', CommentSchema);


app.get('/', function(request, response) {
    Message.find({},false, true).populate('comments').exec(function(err,messages){
        var messages = messages;
        response.render('index',{messages:messages}); //make sure the render is IN the function ALWAYS due to scope and shit
    })
})

app.post('/post/message', function (request, response){
    var message = new Message({name: request.body.name,message: request.body.message})
    console.log(message);
    message.save(function(err){
        response.redirect('/')
    })
})

app.post('/post/comment/:id',function (request, response){
    var messageId = request.params.id;
    Message.findOne({_id : messageId},function(err,message){
        var comment = new Comment({name: request.body.name,comment: request.body.comment});
        comment._message = message._id; //setting the message ID of the comment
        comment.save(function(err){
            message.comments.push(comment);
            message.save(function(err){
                if(err){
                    console.log('error');
                    response.redirect('/');
                } else {
                    response.redirect('/');
                }
            });
        })
    })

})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

