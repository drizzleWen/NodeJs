const express = require('express');

var users = {
  "aaa": "111",
  "bbb": "222"
}
var server = express();

server.listen(8080);
server.use(express.static('./www'));

server.use('/login', function(req, res) {
  var user = req.query['user'];
  var pass = req.query['pass'];
  if (users[user] == null) {
    res.send({"ok": false, "msg": "用户名不存在"});
  } else if (users[user] != pass) {
    res.send({"ok": false, "msg": "用户名或者密码错误"});
  } else {
    res.send({"ok": true, "msg": "登录成功"});
  }
  res.end();
})
