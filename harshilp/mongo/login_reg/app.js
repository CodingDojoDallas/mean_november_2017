var express = require('express');
    app = express();
    bodyParser = require('body-parser');
    path = require('path');
    port = 8000;
    session = require('express-session')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'seCreT' }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/loginreg');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
