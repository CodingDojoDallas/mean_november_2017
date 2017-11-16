// controller
var User = require('../models/users.js');

module.exports = {
  index: (req, res) => {
    let users = User.find({}, (err, users) => {

      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(users);
    });
  },
  create: (req, res) => {
    var user = new User(req.body);
    console.log(req.body);
    user.save( (err) => {
      if (err) {
        return res.json(err);
      }

      return res.json(user);
    });
  },
  update: (req, res) => {
    res.respond("hey");

  },
  show: (req, res) => {
    res.respond("hey");

  },
  destroy: (req, res) => {
    res.json{'deleted': true}

  }
}
