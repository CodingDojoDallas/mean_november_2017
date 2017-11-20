var   express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require("path"),
      session       = require('express-session'),
      mongoose      = require('mongoose'),

      app           = express(),
      port          = 8000;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/message_board');


var MessageSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 4},
 message: { type: String, required: true, minlength: 6},
 comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true });

mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
var Message = mongoose.model('Message') // We are retrieving this Schema from our Models, named 'Message'

// We need to tell Comment it belongs to Message. We use the underscrore _ to tell a model it belongs to another model
var CommentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4},
  _message: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'},
}, {timestamps: true });

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model("Comment");

// This line allows you to use session
app.use(session({secret: 'mysecret'}));
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let messages = Message.find({}, function(err, messages){
    if (err) {
      console.log(err);
      return res.render('index');
    }
    res.render('index', {messages: messages});
  });
})

app.post('/message', (req, res) => {
  // create a new Message with the name corresponding to those from req.body
  var message = new Message(req.body);
    // Try to save that new message to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  message.save(function(err){
    if(err) {
      console.log('Something went wrong', err);
    }
    else {
      return res.redirect('/');
    }
  })
})

app.post('/comments/:id', (req, res) =>{
  var messageId = req.params.id;
  Message.findOne({_id: messageId}, function(err, message){
    var newComment = new Comment({ name: req.body.name, text: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index.ejs', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
