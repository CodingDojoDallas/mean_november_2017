var session = require('express-session'),
    User     = require('../models/user');

module.exports = {
  find: (req, res) => {
    // console.log(session.user_id); //this is to prove/find out if it can grab the id from sessions
    User.findOne({_id: session.user_id}, (err, user) => {
      if (err) {
        return res.json(err.errors);
      }
      return res.json(user);
    });
  },
  delete: (req, res) => {
    if ('user_id' in session) {
      delete session.user_id

      return res.json({output: 'logged out'});
    }
    return res.json({output: 'not logged in'});
  }
}
