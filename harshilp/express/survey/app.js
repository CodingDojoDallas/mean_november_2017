var session = require('express-session'),
    express = require('express'),
    path = require('path'),
    port = 8000,
    app = express();
    bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: 'seCreT' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', function (request, response) {
    response.render("index");
});

app.post('/process', function(request, response) {
    request.session.name = request.body.name;
    request.session.dojo = request.body.dojo;
    request.session.langauge = request.body.language;
    request.session.comment = request.body.comment;
    response.redirect('/success');
});

app.get('/success', function (request, response) {
    data = {
        name : request.session.name,
        dojo : request.session.dojo,
        language : request.session.langauge,
        comment : request.session.comment
    }
    response.render('success', data)
});

app.post('/goBack', function (request, response) {
    response.redirect('/')
});


app.listen(port, function () {
    console.log(`listening on port ${port}`);
});