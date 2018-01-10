const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

module.exports = function() {
  var router = express.Router();
  router.use((req, res, next) => {
    console.log(req.session['user_name']);
    if (!req.session['user_name'] && req.url != '/login') {
      res.redirect('/login');
    } else if (req.session['user_name'] && req.url != '/remaining' && req.url != '/particulars' && req.url != '/exit') {
      res.redirect('/remaining');
    } else {
      next();
    }
  })
  router.get('/login', (req, res) => {
    res.render('register.ejs', {});
  })

  router.post('/login', (req, res) => {
    var MongoClient = mongodb.MongoClient;
    var DB_CONN_STR = 'mongodb://localhost:27017/orders';
    var User = req.body.username;
    MongoClient.connect(DB_CONN_STR, (err, db) => {
      if (err) {
        res.status(500).redirect('/login');
      }
      db.collection("username", (err, collection) => {
        if (err) {
          res.status(500).redirect('/login');
          return;
        }
        collection.findOne({
          'name': User
        }, (err, docs) => {
          if (err) {
            res.status(500).redirect('/login');
            return;
          } else if (!docs) {
            res.status(404).redirect('/login');
            return;
          } else {
            if (req.body.password != docs.password) {
              res.status(400).redirect('/login');
            } else {
              req.session['user_name'] = docs._id;
              res.redirect('/remaining');
            }
          }
        })
      })
    });
  })

  return router;
}
