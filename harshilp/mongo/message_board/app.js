var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    content: { type: String, required: [true, 'Message content required'], minlength: [2, 'The length of {PATH} must be greater than 10 characters'] },
    name: { type: String, required: [true, 'Poster name required'], minlength: [4, 'The length of {PATH} must be greater than 4 characters'] },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

var CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, '{PATH} field required'], minlength: [4, 'The length of {PATH} must be greater than 4 characters'] },
    text: { type: String, required: [true, '{PATH} field required'], minlength: [2, 'The length of {PATH} must be greater than 10 characters'] },
    _message: { type: Schema.Types.ObjectId, ref: 'Message' }
}, { timestamps: true });

var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

app.get('/', function (req, res) {
    Message.find({}).populate('comments').exec(function (err, messages) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(messages);
        }
        res.render('index', { messages: messages });
    });
});

app.post('/postMessage', function (req, res) {
    console.log("POST DATA", req.body);
    var message = new Message(req.body);
    message.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('successfully posted a message!');
        }
        res.redirect('/');
    });
});

app.post('/comment/:id', function (req, res) {
    Message.findOne({ _id: req.params.id }, function (err, message) {
        var comment = new Comment(req.body);
        comment._message = message._id;
        message.comments.push(comment);
        comment.save(function (err) {
            message.save(function (err) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/');
            });
        });
    });
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});
