var path = require('path'),
    users = require('../controllers/users'),
    sessions = require('../controllers/sessions');

module.exports = (app) => {
  // root route not really needed because this api server doesn't really render anything is just for data info
  app.post('/users', users.create);
  app.get('/sessions', sessions.find);
  app.delete('/sessions', sessions.delete);

  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  });
};
