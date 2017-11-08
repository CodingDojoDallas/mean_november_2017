var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

var server = require('http').createServer(app);
var io = require("socket.io")(server);

io.sockets.on("connection", function(socket) {
    socket.on("posting_form", function(data) {
        let updated_message = JSON.stringify(data);
        socket.emit("server_response", {message: updated_message});
        socket.emit("random_number", {num: Math.floor(Math.random()*1000)+1});
    });
});

server.listen(8000, function(){
    console.log("listening on port 8000");
})