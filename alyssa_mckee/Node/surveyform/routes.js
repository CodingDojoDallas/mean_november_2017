module.exports = function(app){
	var named_routes = $ = require("./named_routes")

	var survey = new require("./survey_controller")
	
	app.get($["landing_path"], survey.index)
	
	app.get($["result_path"], survey.result)
	
	app.post($["process_path"], survey.process)

}