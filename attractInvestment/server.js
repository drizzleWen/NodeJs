const express = require('express');
const multer = require('multer');
var multerObj = multer({});
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const jade = require('jade');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const serveFavicon = require('serve-favicon');

// global.dbHandel = require('./database/dbHandel.js');
// global.db = mongoose.connect("mongodb://localhost:27017/orders");

var server = express();
server.listen(8888, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("成功");
    }
});
//静态资源
server.use(express.static(path.join(__dirname, '/public')));

//获取数据
server.use(bodyParser.urlencoded({ extended: false }));
server.use(multerObj.any());

//view engine setup
server.set("view engine", "html");
server.set("views", "./public/template/");
server.engine("html", consolidate.ejs);

//session/cookie

server.use(cookieParser("jhjdkhakjdhkajdkljaklj"));

(function() {
    var keys = [];
    for (var i = 0; i < 1000; i++) {
        keys[i] = "session" + Math.random();
    }
    server.use(cookieSession({
        name: "user_session",
        keys: keys,
        MaxAge: 20 * 60 * 1000
    }));
})()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

server.use('/', require('./routers/login')());
server.use('/particulars', require('./routers/particulars')());
server.use('/remaining', require('./routers/details')());
server.use('/exit', require('./routers/exit')());