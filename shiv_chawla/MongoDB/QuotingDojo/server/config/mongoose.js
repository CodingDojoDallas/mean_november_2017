var fs = require('fs');
// require path for getting the models path
var path = require('path');
// Require Mongoose
var mongoose = require('mongoose');

//connect to the mongodb using GOD and our specific db. It should auto create the db
mongoose.connect('mongodb://localhost/quotes')
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, '../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
    }
  });
  