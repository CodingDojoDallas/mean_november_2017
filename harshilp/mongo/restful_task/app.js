var express = require('express');
app = express();
bodyParser = require('body-parser');
path = require('path');
port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/tasks');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
