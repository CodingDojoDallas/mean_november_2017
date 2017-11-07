var session = require('express-session'),
    express = require('express'),
    path = require('path'),
    port = 8000,
    app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: 'seCreT' }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', function (request, response) {
    request.session.count = request.session.count ? request.session.count + 1 : 1;
    response.render("index", { count: request.session.count });
});

app.get('/plusTwo', function (request, response) {
    request.session.count += 1;
    response.redirect('/');
});

app.get('/reset', function (request, response) {
    request.session.destroy();
    response.redirect('/');
})

app.listen(8000, function () {
    console.log("listening on port 8000");
});