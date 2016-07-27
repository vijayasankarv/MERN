var express = require('express');
var router = express.Router();
var requestify = require('requestify');

var url = require('url');


router.get('/', function(req,res){
  res.send('Movie url displayed');
  console.log(err)
});

router.post('/filmroute', function(req, res,next){
  var name = req.body.name

requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=short&r=json").then(fuction(response)
{
    var details = [];
    details.push(response.body);
    res.send(details);

});
});

module.exports = router;
