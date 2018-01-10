const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');

var server = express();
server.listen(8080);

var multerObj = multer({dest: './www'});

server.use(express.static('./www'));

//server.use(bodyParser.urlencoded({extended: false}));

server.use('/', multerObj.any(), function(req, res) {
  var newName=req.files[0].filename+path.parse(req.files[0].originalname).ext;
  // fs.rename(req.files[0].path,newName,function(err){
  //     if(err){
  //       console.log(err)
  //     }else{
  //       res.send('上传成功');
  //     }
  // });
  fs.rename(req.files[0].path,req.files[0].originalname,function(err){
    if(err){
      console.log(err)
    }else{
      res.send('上传成功');
    }
  })
});
