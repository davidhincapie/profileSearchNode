
const router = require('./router.js');
//problem: we need to look at a user's badge countand points from a web server
//solution: use node.js to perform the profile lookup and create a server to serve our template via HTTP

//Create a basic server

const http = require('http');
http.createServer(function(request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://172.0.0.1:3000');
