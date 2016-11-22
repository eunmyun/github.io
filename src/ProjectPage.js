// Landing page -- what users see on arrival
import React, { Component } from 'react';
import Project from './Project';
import './css/Project.css'
import $ from 'jquery';

var ProjectPage = React.createClass({
    getInitialState() {
      console.log("getInitialState");
      return {
        projectArray: []
      }
    },

    componentDidMount() {
      console.log("componentDidMount");
      $.get('data/project.json').then(function(data) {
        var jdata = JSON.parse(data);
        console.log("data is " + jdata);
        console.log("project is " + jdata.projects);
        this.setState({projectArray: jdata})
      }.bind(this));
    },

    render() {
      console.log("render");
      console.log("state is now " + this.state.projectArray.projects);
      console.log("or " + this.state.projectArray['projects'])
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
