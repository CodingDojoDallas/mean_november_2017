var mongoose = require("mongoose");
    db_name = "full_log_reg";//just use project name. This names your overall DB which houses collections(table), documents(row), fields(columns)
  mongoose.connect(`mongodb://localhost/${db_name}`, {useMongoClient: true});//this is gonna connect the backend server to the DB
