var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Link, Router, IndexRoute} = require('react-router');

var MailBox= require('./components/MailBox');
var SaveBox=require('./components/SaveBox')
var NavBarComponent= require('./components/NavBarComponent');
var Home = require('./components/Home');
var About=require('./components/About');

var MainComponent = React.createClass({
	render: function(){
		return(
			<div className="MainComponent">
				<NavBarComponent/>
				<br/><br/><br/>
				{this.props.children}
			</div>
		)
	}
});

render(
     <Router history={browserHistory}>
        <Route path="/" component={MainComponent}>
            <IndexRoute component={Home} />
            <Route path="Home" component={Home} />
            <Route path="MailBox" component={MailBox} />
			<Route path = "SaveBox" component = {SaveBox} />
			<Route path = "About" component = {About} />
        </Route>
    </Router>,
    document.getElementById('app')
);
