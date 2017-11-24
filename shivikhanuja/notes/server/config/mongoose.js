var mongoose = require('mongoose'),
    db_name  = 'notes';


mongoose.connect(`mongodb://localhost/${db_name}`);