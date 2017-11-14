// GET '/' will serve up the full collection of people born in 1955
// GET '/new/:name/' will add a name into the database which can be used for blank spaces. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
// GET '/remove/:name/' will delete a name from the database.
// GET '/:name' will bring up the document of that particular person.

var users = require('../controllers/users.js')

module.exports = (app) => {

//display all users (index page)
app.get('/users', users.index);
//create new user get
app.post('/users', users.create);
// edit get
app.post('/users/:name/update', users.update);
//show page
app.get('/users/:name', users.show);
//delete user
app.get('/users/:name/remove', users.destroy);
}
