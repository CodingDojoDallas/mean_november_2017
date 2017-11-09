//Step 1 - require npm modules
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')
// let session = require('express-session');
let port = 8000;
//Step 2  invoke express
let app = express();
//connecting a database
mongoose.connect('mongodb://localhost/quotingDojo');
//step 4  set up the middleware
//**** Views  ***
app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));
var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  comment: { type: String, required: true, minlength: 2 }
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
//****  static content  ****
app.use(express.static(__dirname + 'static'));
//****  POST request helper  ****
app.use(bodyParser.urlencoded({ extended: true}));
//****  routes  ****
app.get('/', (req, res) => {
      return res.render('index')
});
// app.get('/showUser', (req, res) =>{
// });
app.post('/quotes', (req, res) =>{
     //take the data from the form
     //form data is always available in the req.body
    let quote = new Quote(req.body);
    quote.save((error) => {
      if (error){
        console.log(quote.errors);
      }
      else {
        console.log(quote);
      }
      return res.redirect('/quotes')
    });
});
app.get('/quotes', (req, res) =>{
  let quotes = Quote.find({}, (err, quotes) => {
    if (err) {
      console.log(err);
      return res.render('index');
    }
    return res.render('quotes', {quotes: quotes});

  });

});
//Step 3  set up port  MUST be at the bottom of the document
app.listen(port, ()  =>  console.log(`listening on port ${port}...`));
