import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    console.log('Constructor Runs');
    this.state = {
      name: 'uzair'
    }
  }
  componentWillMount() {
    console.log('component Will Mount Runs');
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth })
    }
  }
  render() {
    console.log('Rendered App Component')
    return (
      <div className="App">
        Name:{this.state.name} || Width :{this.state.innerWidth} }
      </div>
    );
  }
}
export default App;