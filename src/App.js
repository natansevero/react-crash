import React, { Component } from 'react';
import Projects from './Components/Projects' 
import AddProjet from './Components/AddProject'
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({ projects: [
        {
          id: uuid.v4(),
          name: 'Js Project',
          category: 'Web'
        },
        {
          id: uuid.v4(),
          name: 'Android Project',
          category: 'Mobile'
        },
        {
          id: uuid.v4(),
          name: 'Java Project',
          category: 'Web'
        }
      ] 
    })
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects
    })
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(project => project.id === id)
    projects.splice(index, 1)
    this.setState({ 
      projects
    })
  }

  render() {
    return (
      <div className="App">
        <AddProjet addProject={ this.handleAddProject.bind(this) } />
        <Projects deleteProject={ this.handleDeleteProject.bind(this) } projects={ this.state.projects } />        
      </div>
    );
  }
}    

export default App;
