import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  
    render() {
        return (
        <li className="ProjectItem">
            {this.props.project.name} | {this.props.project.category} --- <a onClick={ () => this.props.deleteProject(this.props.project.id) }>Delete</a>
        </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    deleteProject: PropTypes.func
}

export default ProjectItem;
