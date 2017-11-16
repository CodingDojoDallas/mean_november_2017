var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.redirect('/index')
});

app.get('/index', function(request, response){
	response.render('index')
});

var server = app.listen(8000, function(){
	console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection',function (socket){
	console.log("Client/socket is connected!");
	console.log("Client/socket ID is: ", socket.id);
});

socket.on("button_clicked", function(data){
	console.log("Someone clicked a button! Reason:" + data.reason);
	socket.emit('server_response', {response: "sockets are the best!"});
})
