var express = require('express');
var router = express.Router()

router.get('/', function(req, res){
  var obj = {"name":"venkat", "age": 24};
  res.json(obj);
});
router.post('/data', function(req, res){
  var obj = {"name":"Vijay", "age": 24};
  res.json(obj);
})

module.exports = router;
