const MySql = require('mysql');

var db = MySql.createConnection({host: 'localhost', user: 'root', password: '123456', database: '20171108'});

db.query('SELECT * FROM `user`', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }

});
