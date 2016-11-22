// Application
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'

var App = React.createClass({
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className="App">
					<header className="container">
						<h1>MyungJin(Lucy) Eun</h1>
						<h4>portfolio</h4>
						<Link className="link" activeClassName='active' to="/">Projects</Link>
						<Link className="link" activeClassName='active' to="/resume">Resume</Link>
						<Link className="link" activeClassName='active' to="/about">About</Link>
					</header>
					<div className="children">
						{this.props.children}
					</div>
				</div>
		);
	}
});

export default App;
