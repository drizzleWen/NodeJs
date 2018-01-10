const express = require('express');
const MongoClient = require("mongodb").MongoClient;

var router = express.Router();

module.exports = function() {
  router.get('/', (req, res) => {
    var DB_CONN_STR = 'mongodb://localhost:27017/orders';
    MongoClient.connect(DB_CONN_STR, (err, db) => {
      if (err) {
        res.status(500).redirect('/login');
      } else {
        db.collection('details', (err, collection) => {
          if (err) {
            res.status(500).redirect('/login');
          } else {
            collection.find().toArray((err, docs) => {
              if (err) {
                res.status(500).redirect('/login');
              } else {
                res.render('particulars.ejs', {details_list: docs});
              }
            })
          }
        })
      }
    })

  });

  return router;
}
