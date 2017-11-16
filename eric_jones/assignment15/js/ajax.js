$(document).ready(function() {
    $('form').submit(function() {
        var url =  "https://api.github.com/users/theeejones";
        $.get(url, function(res) {
            $("#myname").text(res.name);
        }, 'json');
        return false;
    });
});
