import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import Resume from './Resume';
import About from './About';
import ProjectPage from './ProjectPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectPage}/>
                <Route path="resume" component={Resume}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
