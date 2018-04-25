import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  
  projectsItemsRender() {
    let projectsItems;
    if(this.props.projects) {
        projectsItems = this.props.projects.map(project => {
            return (
                <ProjectItem deleteProject={this.props.deleteProject} key={project.id} project={project} />
            )
        })
    
        return projectsItems;
    }    
  }  
  
  render() {
    return (
      <div className="Projects">
        <ul>
            {this.projectsItemsRender()}
        </ul>        
      </div>
    );
  }
} 

Projects.propTypes = {
    projects: PropTypes.array,
    deleteProject: PropTypes.func
}

export default Projects;
