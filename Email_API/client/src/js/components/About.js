var React= require('react');

var Home= React.createClass({
  render: function(){

    return (
      <div>
      <h1>My MailBox</h1>

    <button type="submit" className="btn btn-info" id="knowButton"><b>Get Started Here</b></button>

    </div>
    );
  }
});

module.exports=Home;
