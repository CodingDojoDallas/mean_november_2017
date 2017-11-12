var routes = {
	'landing'		: '/',				//
	'registration'	: '/registration',	//
	'new_user'		: '/users/new',		//
	'dashboard'		: '/users',			
	'create_user'	: '/users',
	'show_user'		: '/users/:id',
	'login'			: '/login',
	'create_session': '/session',
	'logout'		: '/session/destroy'
}
/**
* @param named_route String the path name
* @param params Object the route parameters
**/
module.exports = function router (named_route, params = {} ) {
	var route = routes[named_route]
	for (var param in params){
		route = route.replace(":"+param, params[param])
	}
	return route;
}