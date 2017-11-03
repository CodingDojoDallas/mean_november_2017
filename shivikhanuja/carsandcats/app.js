var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/ford') {
        fs.readFile('images/ford.jpg', function(errors , contents){
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/vehicle') {
        fs.readFile('images/vehicle.jpg', function(errors , contents){
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/mercedes') {
        fs.readFile('images/mercedes.png', function(errors , contents){
            response.writeHead(200, {'Content-Type': 'images/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/traffic') {
        fs.readFile('images/traffic.png', function(errors , contents){
            response.writeHead(200, {'Content-Type': 'images/png'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");