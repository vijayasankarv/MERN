var express = require('express');
var router= express.Router();
var mongoose = require("mongoose");
var fdata = {};
var User = require("../studentschema");

mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection;


router.get('/', function (req, res) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open',function(){
    User.find({age:24},function(err, data){
      fdata = data;
    });
  res.send(fdata);
  });

});

module.exports = router;
