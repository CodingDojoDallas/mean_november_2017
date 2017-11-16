const fs = require('fs');
const path = require('path');

module.exports = function(request, response) {

    var extension = path.extname(request.url);
    if (extension !== null) {
        var static_url = "." + request.url;
        fs.readFile(static_url, function(errors, content) {
            if (errors !== null) {
                console.log(errors);
            }
            else {
                response.write(content);
                response.end();
            }
        });
    }
    else {
        
    }
}