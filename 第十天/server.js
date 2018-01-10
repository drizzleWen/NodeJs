const express = require('express');
const multer = require('multer');
var multerObj = multer({dest: './static/upload'});
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const ejs = require('ejs');
const consolidate = require('consolidate');

var server = express();
server.listen(8080);
//获取请求数据
server.get(multerObj.any());

server.use(cookieParser('dasdasdadasfa'));

(function() {
  var keys = [];
  for (var i = 0; i < 10000; i++) {
    keys[i] = Math.random();
  }
  server.use(cookieSession({
    name: 'session_d',
    keys: keys,
    maxAge: 20 * 24 * 3600
  }));
})();
server.use();
//default
server.use(express.static('./static'));
