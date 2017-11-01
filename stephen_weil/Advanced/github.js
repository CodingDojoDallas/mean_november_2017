$(document).ready(function() {
    $('button').click(function() {
        $.get("https://api.github.com/users/sjweil9", function(data) {
            let name = data.name;
            $('#name').text(name);
        });
    });
});