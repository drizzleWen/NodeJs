const express = require("express");
const fs = require("fs");
const jade = require("jade");

var server = express();
server.listen(8080);

var str = jade.renderFile('./static/index.jade', {pretty: true});
console.log(str);

fs.writeFile('./build/index.html', str, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('成功');
  }
})
