var React = require ('react');
var ReactDOM = require ('react-dom');
var Movie = React.createClass(
{
	
	submitMovie: function(movie) {
		console.log(movie.title);
    //console.log("URL:"+this.props.allMovies.Title);
    $.ajax({
    url:"http://localhost:3000/film/movieAdd",
    type:'POST',
    dataType:'JSON',
	data:this.props.allMovies,
    success: function(data) {
	console.log("inside ajax"+data)
}.bind(this),
    error: function(err) {
      console.log(err);
    }.bind(this)
  });
  console.log("Inside submitMovie");
},
render: function()
{

return(

<div className="Movie" id="Movie">
  <div className="row">
    <div className="col-md-4 pull-left"  id = "Poster">
		<img alt="Movie Poster" src={this.props.allMovies.Poster}/>
    </div>
		<div className="col-md-8 pull-right" id ="Data">
		  <form onSubmit={this.submitMovie}>
		  <h3 className="text-center">{this.props.allMovies.Title}</h3>
          <p>Year : {this.props.allMovies.Year}</p>
          <p>Type : {this.props.allMovies.Type}</p>
		  <button type="submit" value="addmovie"className="btn btn-default" id="submitButton" onClick={this.submitMovie}><b>Add</b> </button>
		  <button type="submit" className="btn btn-default" id="submitButton"><b>Update</b></button>
		  <button type="submit" className="btn btn-default" id="submitButton"><b>Delete</b></button>
		  </form>
		</div>
  </div>
</div>
);
}
});

module.exports = Movie;
		  

 /* <div className="col-sm-6"><img src="./kabali.jpg"/></div>
  <div className="col-sm-6"><p>Before Indian Independence, many Tamils from South India were sent to Malaysia as indentured laborers. Rajni, the protagonist, fights this oppression. After a lengthy imprisonment, he is more determined than ever to fight for his people.</p>
  <ul><li>Director:Pa. Ranjith</li>
      <li>Stars:Rajinikanth, Winston Chao, Radhika Apte </li>
  </ul>
</div>
</div>

        <div className="row">

        <div className="col-sm-6"><img src="./darkknight.jpg"/></div>
        <div className="col-sm-6"><p>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms
        with one of the greatest psychological tests of his ability to fight injustice.</p>
        <ul><li>Director: Christopher Nolan</li>
            <li>Stars: Christian Bale, Heath Ledger, Aaron Eckhart</li>
        </ul>
 </div>
 </div>
 <div className="row">
        <div className="col-sm-6"><img src="./gravity.jpg"/></div>
        <div className="col-sm-6"><p>A medical engineer and an astronaut work together to survive after an accident leaves them adrift in space.</p>
        <ul><li>Director: Alfonso Cuarón</li>
            <li>Stars: Sandra Bullock, George Clooney, Ed Harris</li>
        </ul>
        </div>
    </div>

        <div className="row">

        <div className="col-sm-6"><img src="./iceage.jpg"/></div>
        <div className="col-sm-6"><p>Manny, Diego, and Sid join up with Buck to fend off a meteor strike that would destroy the world.</p>
        <ul><li>Director:  Michael J. Wilson</li>
            <li>Stars: Ray Romano, Denis Leary, John Leguizamo </li>
        </ul>
		**/

