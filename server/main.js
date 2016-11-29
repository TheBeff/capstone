const server = require('http').createServer(require('./app'));

var PORT = process.env.PORT || 1337;

console.log("hello from main");

server.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});