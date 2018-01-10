const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();
server.listen(8080);

var arr = [];
for (var i = 0; i < 100000; i++) {
  arr.push('flage' + Math.random());
}

server.use(cookieParser('kdjakjdlajld'));
server.use(cookieSession({keys: arr}));

server.use('/aaa/a.html', function(req, res) {
  // res.cookie('user', 'aaa', {
  //   path: '/aaa',
  //   maxAge: 24 * 3600 * 1000,
  //   signed: true
  // });
  //console.log(req.cookies['user']);
  //console.log(req.signedCookies['user']);
  //删除cookie 要加上path
  //res.clearCookie('user', {path: '/aaa'});

  //输出session
  console.log(req.session);

  //查看当前页面浏览次数
  if (req.session['count'] == null) {
    req.session['count'] = 1;
  } else {
    req.session['count']++;
  }
  console.log(req.session['count']);
  res.send('ok');
});
