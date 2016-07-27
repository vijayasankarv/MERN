var Movie = require('../filmschema');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var requestify = require('requestify');
var movieList = [];

//List All Movies
router.get('/movieAll', function(req, res) {
  Movie.find({})
  .exec(function(err, movies) {
    if(err){
      return res.send("No movies found");
    }
	else{
		res.json(movies);
	}
 });
});

//Adding a new Movie
router.post('/movieAdd',function(req, res) {
	console.log(req.body);
    var movie = new Movie(req.body);	
    movie.save(function(err) {
    if(err) {
      return res.send("Data not added");
    }
    res.send("Movie added succesfully"+movie);
  });
}); 

//Delete a movie
router.delete('/deleteMovie/:id', function(req, res) {
  Movie.findOneAndRemove({
    _id: req.params.id
  }, function(err, movie) {
      if(err) {
        res.send("Movie ID doesnot exist");
      }
      res.json(movie);
  });
});

//Update a movie
router.put('/updateMovie/:id', function(req, res) {
  Movie.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("Movie ID doesnot exist, failed to update");
    }

    for(prop in req.body) {
      movie[prop] = req.body[prop];
    }

//saving the movie
    movie.save(function(err) {
      if(err) {
        return res.send("Not possible to save data");
      }

      res.json(movie);
    });
  });
});


module.exports = router;
