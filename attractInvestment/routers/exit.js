const express = require('express');
var router = express.Router();

module.exports = function() {
  router.use('/', (req, res) => {
    delete req.session['user_name'];
    res.redirect('/login');

  });

  return router;
}
