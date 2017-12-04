var users = require('../controllers/users.js');

// Below is how you define app, in line 4
module.exports = (app) => {
  app.get('/', (req, res) => {
    console.log(users);
  });

  app.post('/users', (req, res) => {

  });

  app.get('/users/:id', (req, res) => {

  });
}
