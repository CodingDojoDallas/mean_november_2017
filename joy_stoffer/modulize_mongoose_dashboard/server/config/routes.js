//****  routes  ****
var bats = require('../controllers/bats.js')
module.exports = (app) => {

//display all bats (index page)
app.get('/', bats.index);
//add new bat page
app.get('/bats/new', bats.new)
//create new bat post
app.post('/bats', bats.create);
// edit post
app.get('/bats/edit/:id', bats.edit);
//this should be the update bat button route - KM
app.post('/bats/:id', bats.update);
//show page
app.get('/bats/:id', bats.show);
//delete bat
app.post('/bats/destroy/:id', bats.destroy);
}
