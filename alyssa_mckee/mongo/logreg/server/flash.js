module.exports = (function(){
	//var flash = {};
	function flash_messages(req, errorObj, key = 'messages'){
		//flash[key] = errorObj;
		req.session.flash = req.session.flash || {}
		req.session.flash[key] = errorObj;
	}
	function flash_errors(req, errorObj){
		flash_messages(req, errorObj, 'errors')
	}
	function get_flashed_messages(req){
		// var messages = flash;
		// flash = {};
		// return messages;
		var message = req.session.flash
		req.session.flash = {};
		return message;
	}
	return {flash_errors: flash_errors, flash_messages: flash_messages, get_flashed_messages: get_flashed_messages}
})()