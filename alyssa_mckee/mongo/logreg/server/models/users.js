var db_name = "logreg"
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/'+ db_name,{useMongoClient: true});

var bcrypt = require('bcrypt-as-promised');


var UserSchema = new mongoose.Schema({
	first_name:{ type: String, required: true },
	last_name:{ type: String , required: true},
	email:{ type: String, required: true, unique: [true, "email must be unique"]},
	birthday:{ type: Date, required: true },
	password:{ type: String, required: true },
});



UserSchema.methods.create_user_from_data = function(form_data){
	var user = this;
	var error = {};
	user.first_name = form_data.first_name;
	user.last_name = form_data.last_name;
	user.email = form_data.email;
	user.birthday = form_data.birthday;
	user.password = form_data.password;
	return user;
}

/* What pre does prior to saving:
	Pre runs before saving.  
*/
UserSchema.pre('save',function(next){
	var user = this;
	user.email = user.email.toLowerCase();
	
	bcrypt.hash(user.password, 10)
	.then((hashed_password) => {
		user.password = hashed_password;
		next();
	})
	.catch((error) =>{
		console.log(error);
		user.password = ''; //if it errored I dont want to store their raw password
		next();
	})
})

/*
We can also call the methods e.g. addJayToString directly on the instance, if we didn't want to use 'pre'.  e.g.
      var MyModel = mongoose.model('myModelName');
      var myModelInstance = new MyModel({name: "The Amazing "});
      console.log(myModelInstance.addJayToString("hello "));
    This would just console.log "hello Jay";
*/



mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

/*
/^(?=.*[a-z]) 		//must contain 1 lowercase
(?=.*[A-Z])			//must contain at least 1 uppercase
(?=.*\d)			//must contain 1 number
(?=.*[$@$!%*?&])	//must contain 1 special character
[A-Za-z\d$@$!%*?&]{8,32}/	//letters numberssome symbols of length 8-32
*/
