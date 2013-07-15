var express = require('express');

var app = express.createServer(express.logger());
var data;

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  data = fs.readFileSync('index.html');
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
