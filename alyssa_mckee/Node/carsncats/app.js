// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
	// see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
		
	(function router(url){
		
		ROUTES = {
			"/cars":"cars.html",
			"/cats":"cats.html",
			"/catcars":"catcars.html",
			"/cars/new":"new.html"
		}
		
		result = url.match(/^\/stylesheets\/(.+)\.css$/i)
		if (result){
			fs.readFile("./stylesheets/"+result[1]+".css", 'utf8', function (errors, contents){
				response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
				response.write(contents);  //  send response body
				response.end(); // finished!
			});
			return
		}
		
		result = url.match(/^(.+)\.(png||jpeg||jpg||gif)$/i)
		if (result){
			fs.readFile("./images/" + result[1]+"."+result[2], function (errors, contents){
				response.writeHead(200,  {'Content-type': 'image/'+result[2] });  // send data about response
				response.write(contents);  //  send response body
				response.end(); // finished!
			});
			return
		}
		
		if(url in ROUTES){
			fs.readFile("./views/" + ROUTES[url], 'utf8', function (errors, contents){
				response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
				response.write(contents);  //  send response body
				response.end(); // finished!
			});
		}
		else{
			response.writeHead(404);
			response.end('url not found!!!');
		}
		
	})(request.url)
	
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");