var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('combined'));


app.get('/', function(req, res) {
  var resp=eval("("+req.query.name+")");
  res.send('Response</br>'+resp);
});

app.listen(80, function () {
  console.log('Listening on port 80');
});
