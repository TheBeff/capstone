const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app; 
