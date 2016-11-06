const express = require('express');
const path = requrire('path');
const app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));

module.exports = app; 
