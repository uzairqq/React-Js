import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = { name: "uzair" };
  }
  render() {

    setTimeout(() => {
      this.setState({ name: "pashasss" })
    }, 4000);
    return (
      <div className="App">

        {/* <Person name="uzair" age="25" />
        <Person name="ashar" age="29">Hobbies: Cricket</Person>
        <Person name="shumail" age="33" /> */}
        {this.state.name}
      </div>
    );
  }
}

export default App;
