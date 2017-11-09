var express = require('express');
app = express();
bodyParser = require('body-parser');
path = require('path');
port = 8000;

app.use(bodyParser.json());

require('./server/config/1955');
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
