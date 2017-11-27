var session = require('express-session'),
    User    = require('../models/user');

  module.exports = {
    //these are the methods you create for the user to be able to call User.whatever() and have it happen
    create: (req, res) => {
      let newUser = new User(req.body);
      //check to see if the user already exists otherwise youll just make a bunch of the same guy
      //so search for this current person and youll either get an error or an actual user back
      User.findOne({name: newUser.name}, (err, user) =>{
        // if the user exists already you will get a json object filled with the user info--> user ==={"name": "Kyle"}
        if (user) {
          // log them in(put them into session) when you find them in the DB
          session.user_id = user._id;
          return res.json(user);
        }
        // if the user does NOT exist the user === null and the err === null
        newUser.save( (err) =>{
                    if (err) {
                         return res.json(err.json());
                    }

                    // log them in(put them into session) when you create them in the DB
                    session.user_id = newUser._id;
                    return res.json(newUser);
               });



      });
    }
  }
