const express = require('express');

var router = express.Router();

module.exports = function() {
  router.get('/', (req, res) => {
    res.render('remaining.ejs', {})
  })

  return router;
}
