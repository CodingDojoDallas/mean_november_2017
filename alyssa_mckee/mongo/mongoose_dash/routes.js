module.exports = function(app){
	var pack_controller = require('./controller')
	
	app.get('/', pack_controller.dashboard)
	
	app.post('/packs', pack_controller.create_pack)
	
	app.get('/packs/new', pack_controller.new_pack)
	
	app.get('/packs/edit/:id', pack_controller.edit_pack)
	
	app.post('/packs/destroy/:id', pack_controller.destroy_pack)
	
	app.get('/packs/:id', pack_controller.show_pack)

	app.post('/packs/:id', pack_controller.update_pack)
}