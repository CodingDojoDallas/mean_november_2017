// loading http and file server modules
var http = require('http');
var fs = require('fs');
// create server
var server = http.createServer(function(request, response) {
    // check what URL is being requested
    if (request.url === "/") {
        fs.readFile('index.html', 'utf8', function (errors, contents) {
            // response header - 200-300s status = good, 400-500s = bad
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/ninjas") {
        fs.readFile('ninjas.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/dojos/new") {
        fs.readFile('dojos.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // if no route for requested URL
    else {
        response.writeHead(404);
        response.end("File not found!");
    }
});
// tell server what port to run on
server.listen(6789);