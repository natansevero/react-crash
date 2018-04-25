import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="ProjectItem">
        {this.props.name} | {this.props.category}
      </li>
    );
  }
}    

export default ProjectItem;
