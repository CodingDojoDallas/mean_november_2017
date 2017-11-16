module.exports = function(app){
	var Api = require('./controller')
	
	app.get('/', Api.index);
	app.get('/new/:name', Api.createName);
	app.get('/remove/:name', Api.destroyName);
	app.get('/:name', Api.showName);
}