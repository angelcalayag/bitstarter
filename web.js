var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer(16);

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  fs = require("fs");
  buffer = fs.readFileSync('index.html');
  response.send(buffer.toString('buffer'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
