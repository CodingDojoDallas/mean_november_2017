var users = require('../controllers/users.js')
var sessions = require('../controllers/sessions.js')

module.exports = (app) => {
  //users
  app.get('/', users.index);
  app.get('/users/new', users.new);
  app.post('/users', users.create);
  app.get('/users/:id', users.show);

  //sessions
  app.get('/sessions/new', sessions.new);
  app.post('/sessions', sessions.create);
  app.delete('/sessions', sessions.delete);
}
