// loading http and file server modules
var http = require('http');
var fs = require('fs');
// create server
var server = http.createServer(function(request, response) {
    // check what URL is being requested
    if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            // response header - 200-300s status = good, 400-500s = bad
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('views/newcar.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/stylesheets/style.css") {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/car1.jpg" || request.url === "/images/car2.jpg" || request.url === "/images/car3.jpg") {
        var img_url = "." + request.url;
        fs.readFile(img_url, function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/cat1.gif" || request.url === "/images/cat2.gif" || request.url === "/images/cat3.gif") {
        var img_url = "." + request.url;
        fs.readFile(img_url, function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/gif'});
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