module.exports = (function(){
	var flash = {};
	function flash_messages(req, errorObj, key = 'messages'){
		flash[key] = errorObj;
	}
	function get_flashed_messages(req){
		var messages = flash;
		flash = {};
		return messages;
	}
	return {flash_messages: flash_messages, get_flashed_messages: get_flashed_messages}
})()