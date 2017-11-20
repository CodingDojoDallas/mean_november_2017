var users = require('../controllers/user.js');


app.get('/', (req, res) => {
  console.log(users);
});

app.post('/users', (req, res) => {

});

app.get('/users/:id', (req, res) => {

});
