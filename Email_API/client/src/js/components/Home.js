var React = require ('react');
var ReactDOM = require ('react-dom');


var Home = React.createClass({

render: function()
{

return(
<div>
    <h1>Email Login</h1>
    <button type="submit" className="btn btn-info" id="knowButton"><b>Get Started here</b></button>

    </div>
);

}

});

module.exports = Home;
