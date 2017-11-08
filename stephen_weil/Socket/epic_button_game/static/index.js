$(document).ready(function(){
    var socket = io.connect();
    $('#epic').click(function(){
        socket.emit("epic_button");
    });
    $('#reset').click(function(){
        socket.emit("reset_button");
    });
    socket.on("epic_response", function(data) {
        $('h1').text("This button has been pushed " + data.count + " time(s)!");
    });
    socket.on("reset_response", function() {
        $('h1').text("This button has been reset! It has now been pushed 0 times!");
    });
});