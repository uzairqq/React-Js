import React, { Component } from 'react';
import './App.css';
import Users from './user/Users';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Users notANumber="Dynamic Website" />
        <Users justANumber="Static Website" />
        <Users title="App.js" />

      </div>

    );
  }
}

export default App;