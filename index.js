var http = require('http');
var util = require('util');
var fs = require('fs');
var port = 8088;

var filenames = fs.readdirSync("img");

http.createServer(function(req, res) {
	var imgName = "img/" + filenames[Math.floor(Math.random() * filenames.length)];
	console.log("serving " + imgName);
	var img = fs.readFile(imgName, {}, function(err, data) {
		if(err) {
			res.writeHead(404, {'Content-Type' : 'text/plain'});
			res.end('could not the find file very so sorry\n');
		} else {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.end(data, 'binary');
		}
	});
}).listen(port);
