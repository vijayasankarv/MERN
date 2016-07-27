var React = require ('react');
var ReactDOM = require ('react-dom');
var Movie = require('./Movie');

var MovieList = React.createClass({
render: function()
{
	
console.log(this.props.data);
var movieMap = this.props.allMovieData.map(function(movie){

return(
  <Movie allMovies={movie} key={movie.imdbID}></Movie>
);
}.bind(this));
return(
  <div className = "MovieList">
  {movieMap}
  </div>
);

}
});

module.exports = MovieList;
