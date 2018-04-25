import React, { Component } from 'react';
import Projects from './Components/Projects' 
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          id: 0,
          name: 'Js Project',
          category: 'Web'
        },
        {
          id: 1,
          name: 'Android Project',
          category: 'Mobile'
        },
        {
          id: 3,
          name: 'Java Project',
          category: 'Web'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={ this.state.projects } />        
      </div>
    );
  }
}    

export default App;
