const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', function(req, res, next){
	
	fs.writeFile('./testSpec.js', req.body.code, function (error) {

	  if (error) return callback(error)

	  var Exec = require('child_process').exec;

	  Exec('node_modules/mocha/bin/mocha ./testSpec.js', function (error, stdout, stderr) {
	  	console.log(stdout);
	  	res.send(stdout);
	  });

	});

});

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app; 
