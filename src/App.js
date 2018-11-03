import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , I Am A React App Developer</h1>
        <Person name="uzair" age="25" />
        <Person name="ashar" age="29">Hobbies: Cricket</Person>
        <Person name="shumail" age="33" />

      </div>
    );
  }
}

export default App;
