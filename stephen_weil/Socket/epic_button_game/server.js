var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var count = 0;

app.get("/", function(req, res) {
    res.render("index", {count: count});
});

var server = require('http').createServer(app);
var io = require("socket.io")(server);

io.sockets.on("connection", function(socket) {
    socket.on("epic_button", function() {
        count++;
        io.emit("epic_response", {count: count});
    });
    socket.on("reset_button", function() {
        count = 0;
        io.emit("reset_response");
    });
});

server.listen(8000, function(){
    console.log("listening on port 8000");
})