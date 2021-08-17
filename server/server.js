const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
	console.log('listening on 8080');
});

app.use(express.static(path.join(__dirname, '../shop/build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../shop/build/index.html'));
});

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../shop/build/index.html'));
});