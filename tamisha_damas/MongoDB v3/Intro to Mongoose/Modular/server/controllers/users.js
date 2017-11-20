var User = require('..models/users.js');

module.exports = {
  index: (req, res) => {
    if ('errors' in session){
      var errors = session['errors'];

      console.log(typeof errors);

      delete session['errors'];
    }
    User.find({}, (err, users) => {
      if (err) {
        console.log(err);
      }
      return res.render('index', { users: users, errors: errors });
    });
  },

  create: (req, res) => {
    let user = new User(req.body);

    user.save((err) => {
      if (err) {
        console.log(err.message);

        session['errors'] = err.message;
      }

      return res.redirect('/')
    });
  },

  show: (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
        console.log(err.message);
      }
      return res.render('show', { user: user })
    });
  },
}
