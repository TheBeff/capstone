const server = require('http').createServer(require('./app'));

var PORT = process.env.PORT || 1337;

server.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});