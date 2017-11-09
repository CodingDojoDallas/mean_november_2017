var mongoose   = require('mongoose');
var path       = require('path');
var fs         = require('fs');
var models_path = path.join(__dirname, '../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/restful_tasks');

fs.readdirSync(models_path).forEach(file => {
  if (file.indexOf('.js') >= 0) {
    require(path.join(models_path, file));
  }
});