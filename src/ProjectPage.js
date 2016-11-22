// Landing page -- what users see on arrival
import React, { Component } from 'react';
import Project from './Project';
import './css/Project.css'
import $ from 'jquery';

var ProjectPage = React.createClass({
    getInitialState() {
      console.log("getInitialState");
      componentDidMount();

      return {
        projectArray: []
      }
    },

    componentDidMount() {
      console.log("componentDidMount");
      $.get('data/project.json').then(function(data) {
        console.log("data.projects is " + data.projects);
        this.setState({projectArray:data.projects})
      }.bind(this));
    },

    render() {
      console.log("render");
      console.log("state is now " + this.state.projectArray);
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
