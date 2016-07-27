var React=require('react');
var {Link}=require('react-router');
 var NavbarComponent = React.createClass({
  render: function() {
    return (
      <div>
      <nav className="navbar navbar-default">
      <div className="container-fluid">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/Home">Home</Link></li>
        <li><Link to="/MovieBoxView">ALL MOVIE</Link></li>
      <li><Link to="/MovieBox">ADD MOVIE</Link></li>
      </ul>
    </div>
  </div>
</nav>

</div>
    );
  }
});
module.exports=NavbarComponent;
