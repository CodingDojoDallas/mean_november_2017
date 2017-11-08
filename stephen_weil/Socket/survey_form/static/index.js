$(document).ready(function(){
    var socket = io.connect();
    $('form').submit(function(e){
        e.preventDefault();
        let data = {
            name: $('input[name="name"]').val(),
            location: $('select[name="location"]').val(),
            language: $('select[name="language"]').val(),
            comment: $('textarea').val()
        };
        socket.emit("posting_form", data);
    });
    socket.on("server_response", function(data) {
        $('body').prepend("<div id='response'></div>");
        $('#response').append("<p>You emitted the following information to the server: " + data.message + "</p>");
    });
    socket.on("random_number", function(data) {
        $('#response').append("<p>Your lucky number emitted by the server was " + data.num + "</p>");
    }); 
});