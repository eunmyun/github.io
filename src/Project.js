import React from 'react';

var Project = React.createClass({
  render() {
    return(

        <div className="card flex-item flip-container" ontouchstart="this.classList.toggle('hover');">
          <a href={this.props.data.url}>
          <div className="flipper">
            <div className="front card-image">
                <img src={this.props.data.image}/>
            </div>
            <div className="back">
                <h4>{this.props.data.title}</h4>
                <p>{this.props.data.desc}</p>
                <p>Tools used:
                  {this.props.data.tools.map(function(d, i){
                    return <span>{" " + d}</span>
                  })}
                </p>
                <br />
                <br />
                <p>Click to go to the web page</p>
            </div>
          </div>
          </a>
        </div>

    )
  }
});

export default Project;
