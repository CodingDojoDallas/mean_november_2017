var mongoose = require('mongoose'),
    // path     = require('path'),
    // fs       = require('fs')
    db_name  = '1955api';

mongoose.connect(`mongodb://localhost/${db_name}`,{useMongoClient: true});

// var models_path = path.join(__dirname, '../models');

// fs.readdirSync(models_path).forEach((file) =>{
//   if (file.indexOf('.js') >= 0) {
//     require(path.join(models_path, file));
//   }
// });
