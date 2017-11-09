var mongoose = require('mongoose'),
    // path     = require('path'),
    // fs       = require('fs')
    db_name  = 'modulize_mongoose_dashboard';

mongoose.connect(`mongodb://localhost/${db_name}`,{useMongoClient: true});

// var models_path = path.join(__dirname, '../models');

// fs.readdirSync(models_path).forEach((file) =>{
//   if (file.indexOf('.js') >= 0) {
//     require(path.join(models_path, file));
//   }
// });
