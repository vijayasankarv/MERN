var React = require ('react');
var ReactDOM = require ('react-dom');
var MovieForm = require('./MovieForm');
var MovieList = require('./MovieList');

var MovieBox = React.createClass({
	
    getInitialState: function()
    {
      return{MyData:[]};
    },
	
	submitTitleData : function(movie){
		
		console.log(movie.Title);
		
		$.ajax({
			
			url:"http://www.omdbapi.com/?s="+movie.Title,
			type:"GET",
			datatype:"JSON",
			success:function(data)
			{
				console.log(data);
				this.setState({MyData:data.Search});
				
			}.bind(this),
			error:function (err)
			{
				
				console.log(err);
				
			}.bind(this)
	
		});
		
	},
	
render: function()
{

return(
<div className = "MovieBox">
<h2><b>Movie Data Base</b></h2>
<MovieForm handleSubmitTitle = {this.submitTitleData}/>
<MovieList allMovieData={this.state.MyData}/>
</div>
);

}

});

module.exports = MovieBox;
