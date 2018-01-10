var express = require('express');
var server = express();
const jade = require('jade');
server.listen(8080);

var str = jade.renderFile('./static/2.jade', {pretty: true});
console.log(str);

server.use('/', function(req, res) {
  res.send('hhhhh');
});
