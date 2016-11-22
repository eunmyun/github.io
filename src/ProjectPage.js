// Landing page -- what users see on arrival
import React, { Component } from 'react';
import Project from './Project';
import './css/Project.css'
import $ from 'jquery';

var ProjectPage = React.createClass({
    getInitialState() {
      return {
        projectArray: []
      }
    },

    componentDidMount() {
      $.get('data/project.json').then(function(data) {
        var jdata = JSON.parse(data);
        this.setState({projectArray: jdata.projects})
      }.bind(this));
    },

    render() {
        return(
          <div className="flex-container">
            {this.state.projectArray.map(function(d, i){
              return <Project key={'project' + i} data={d} />
            })}
          </div>
        )
    }
});

export default ProjectPage;
