var React = require ('react');
  var ReactDOM = require ('react-dom');
  var MovieList = require('./MovieList');

  var MovieForm = React.createClass({
	  
	  getInitialState : function()
	  {
		  return{Title: ''};
	  },
	  
	  handleTitleChange : function(e){
		  
		  this.setState({Title:e.target.value});
		  
		  
	  },
	  
	  submitTitle : function(e)
	  {
		  e.preventDefault();
		  this.props.handleSubmitTitle({Title:this.state.Title});
		  
		  
	  },
	  
  render: function()
  {

return(
  <div className = "search">
	<form onSubmit = {this.submitTitle}>
        <input type="text" name = "Title" value = {this.state.Title} onChange = {this.handleTitleChange} className="form-control" placeholder="Search any movie here..." id="searchInput"/><br/>
        <button type="submit" className="btn btn-default"><b>Search</b></button>
    </form>
 </div>
  );

  }
  });

module.exports = MovieForm;
