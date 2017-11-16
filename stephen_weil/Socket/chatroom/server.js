var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(session({
    secret: "fjias891z0zn0fj01",
    resave: true,
    saveUninitialized: true
}));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');
routes(app);


var server = require('http').createServer(app);
var io = require('socket.io')(server);

var users = {};

io.sockets.on('connection', function (socket) {
    socket.on("logged_in", function(data) {
        users[socket.id] = data.user;
        socket.emit("user_data", {users: users});
        socket.broadcast.emit("new_user", {user: data.user});
    });
    socket.on("sent_message", function(data) {
        socket.broadcast.emit("broadcast_message", {user: users[socket.id], message: data.message});
    });
    socket.on("disconnect", function() {
        socket.broadcast.emit("user_left", {user: users[socket.id], users: users});
        delete users[socket.id];
    });
});

server.listen(8000, function(){
    console.log("listening on port 8000");
});