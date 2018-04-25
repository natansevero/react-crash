import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  
  projectsItemsRender() {
    let projectsItems;
    if(this.props.projects) {
        projectsItems = this.props.projects.map(project => {
            return (
                <ProjectItem key={project.id} name={project.name} category={project.category} />
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

export default Projects;
