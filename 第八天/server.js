const express = require('express');
const ejs = require('ejs');
const consolidate = require('consolidate');

var server = express();
server.listen(8080);

server.set('view engine', 'html');
server.set('views', './static');
server.engine('html', consolidate.ejs);

server.use('/index', function(req, res) {
  res.render('test.ejs', {name: "blue"});
});
