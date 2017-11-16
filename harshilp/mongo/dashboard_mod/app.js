var express = require('express');
    app = express();
    bodyParser = require('body-parser');
    path = require('path');
    port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./server/config/dashboard');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
