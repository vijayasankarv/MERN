var express = require('express');
var fun=require('./cal')
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Calculator Functions');
})
app.get('/data', function (req, res) {
 var obj={"name":"Vijay","age":28};
  res.json(obj);
})
app.get('/add/:param1/:param2', function (req, res) {
 res.send("addition:"+fun.add(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})
app.get('/sub/:param1/:param2', function (req, res) {
 res.send("substraction:"+fun.sub(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})

app.get('/mul/:param1/:param2', function (req, res) {
 res.send("Multiplication:"+fun.mul(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})
app.get('/div/:param1/:param2', function (req, res) {
 res.send("Division:"+fun.div(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})
var server = app.listen(8080, function () {

 var host = server.address().address
 var port = server.address().port

 console.log("CalculatorApp listening at http://%s:%s", host, port)

})
