// get http module
var http = require('http');
// fs(file system) module allows u to read and write content for response!
var fs = require('fs');
//creating a server using http module:
var server = http.createServer(function (request, response){
      // see what URL the clients are requesting:
      console.log('client request URL: ', request.url);
      // this is how we do routing to the index page:
      if(request.url === '/cars') {
          fs.readFile('views/cars.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
                response.write(contents);  //send response about body
                response.end(); // finished!
          });
      }
      else if (request.url === '/images/Auto.jpg' || request.url === '/images/Car.jpg' || request.url === '/images/Maserati.jpg') {
          var img_url = "." + request.url;
          fs.readFile(img_url, function (errors, contents){
              response.writeHead(200, {'Content-Type': 'images/jpg'});  // send data about response
              response.write(contents);  //  send response body
              response.end(); // finished!
          });
      }
      else if (request.url === '/cats') {
          fs.readFile('views/cats.html', 'utf8', function (errors, contents){
              response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
              response.write(contents);  //  send response body
              response.end(); // finished!
          });
      }
      else if (request.url === '/images/Cat_Bowl.jpg' || request.url === '/images/Cat_Napping.jpg' || request.url === '/images/Peeking_Cat.jpg') {
          var img_url = "." + request.url;
          fs.readFile(img_url, function (errors, contents){
              response.writeHead(200, {'Content-Type': 'images/jpg'});  // send data about response
              response.write(contents);  //  send response body
              response.end(); // finished!
          });
      }
      else if (request.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
      }
      else {
        response.writeHead(404);
        response.end('File not found!!!');
      }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
