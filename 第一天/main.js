const http=require('http');
const querystring=require('querystring');
const urlLib=require('url');
const fs=require('fs');

http.createServer(function(req,res){
  //get
  var obj=urlLib.parse(req.url,true);
  const url=obj.pathname;
  const GET=obj.qurey;
  //post
  var str="";
  req.on('data',function(data){
    str+=data;
  })
  var i=0;
  req.on('end',function(){
    const POST=querystring.parse(str);
    console.log(`这是第${i++}次发送`)
    console.log(POST)
  })

  var file_name='./www'+url;
  fs.readFile(file_name,function(err,data){
    if(err){
      res.write('404');
    }else {
      res.write(data);
    }
    res.end();
  })

}).listen(8080);
