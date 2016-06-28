var express = require('express');
var app = module.exports = express();
var http = require('http').Server(app);


app.use('public/', express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.send("hello");
})


var server = http.listen(process.env.PORT, function() {
  console.log('start at port:' + server.address().port);
});