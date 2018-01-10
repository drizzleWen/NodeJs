const express = require('express');
var server = express();
server.listen(8080);

var newsRouter = express.Router();

newsRouter.get('/router', function(req, res) {
  res.send('router');
});

server.use('/news', newsRouter);
