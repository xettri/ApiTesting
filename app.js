var express =           require("express");
var app =               express();
var port =              process.env.PORT || 3000;

app.get('/', function(req, res){
  var htmltxt = '<center><h1>Welcome</h1></center>';
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(htmltxt);
});

app.get('/voicedemo', function(req, res){
  filetxt  = '<Response>';
  filetxt += '<Say voice="alice">Hello we are from IPE Teacher Learning Program. This call is to inform you that you are invited for third phase'
  filetxt += ' teacher learning trainning. We will sortly call you regarding your confirmation. Thankyou and have a nice day.</Say>';
  filetxt += '<Play>http://demo.twilio.com/docs/classic.mp3</Play>';
  filetxt += '</Response>';
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(filetxt);
});

app.listen(port,()=>{
  console.log("started at",port)
});