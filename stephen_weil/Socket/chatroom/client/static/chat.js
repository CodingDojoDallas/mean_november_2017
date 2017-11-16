$(document).ready(function() {
    var socket = io.connect('http://localhost:8000');
    var cur_user = $('form#chat span').text();
    socket.emit("logged_in", {user: cur_user});
    socket.on("user_data", function(data) {
        for (let key in data.users) {
            $('#users').append("<li>" + data.users[key] + "</li>");
        }
    });
    socket.on("new_user", function(data) {
        $('#chatbox').append("<p>" + data.user + " logged in!</li>");
        $('#users').append("<li>" + data.user + "</li>");
    });
    socket.on("user_left", function(data) {
        $('#chatbox').append("<p>" + data.user + " logged out!</li>");
        var user_string = "";
        for (let key in data.users) {
            user_string += "<li>" + data.users[key] + "</li>";
        }
        $('#users').html(user_string);
    });
    socket.on("broadcast_message", function(data) {
        let message_string = "<p><span class='name'>" + data.user + "</span>: " + data.message + "</p>";
        $('#chatbox').append(message_string);
    });
    $('form').submit(function(e) {
        e.preventDefault();
        let message_text = $('#message').val();
        let message_string = "<p><span class='myname'>" + cur_user + "</span>: " + message_text + "</p>";
        $('#chatbox').append(message_string);
        socket.emit("sent_message", {message: message_text});
        $('#message').val("");
    });
});