module.exports = function(app){
	
	var Posts = require("./controllers/posts_controller");
	var Comments = require("./controllers/comments_controller");
	
	app.get('/', Posts.index)
	
	app.post('/posts', Posts.create)
	
	app.post('/posts/:id/comments', Comments.create)




}