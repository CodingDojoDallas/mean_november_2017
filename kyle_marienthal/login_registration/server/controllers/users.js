// controllers

var session = require('express-session');
var User = require('../models/users.js');

module.exports = {
  index: (req, res) => {
    User.find({}, (err, users) => {
      return res.render('users/index', { users: users, errors: err });
    });
  },
  new: (req, res) => {
    return res.render('users/new');
  },
  create: (req, res) => {
    let user = new User(req.body);
    user.save( (err) => {
      if (err) {
        console.log(err);
        return res.redirect('/users/new');
      }
      session.user_id = user._id;
      return res.redirect(`/users/${users._id}`);
    });
  },
  show: (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
        console.log(err.message);
      }
      return res.render('users/show', { user: user})
    });
  }
}
