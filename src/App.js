import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    users: [
      { name: "uzair", age: 22, hobbies: "Cricket" },
      { name: "laraib", age: 23, hobbies: "Football" },
      { name: "sarmad", age: 25, hobbies: "Snooker" }

    ]
  };

  render() {
    setTimeout(() => {
      this.setState({
        users: [
          { name: "uzair222", age: 222, hobbies: "Crickets" },
          { name: "laraib33", age: 223, hobbies: "Footballs" },
          { name: "sarmad44", age: 225, hobbies: "Snookers" }
        ]
      })
    }, 1000);
    return (
      <div className="App">
        <Person name={this.state.users[0].name} age={this.state.users[0].age}>Hobbies:{this.state.users[0].hobbies}</Person>
        <Person name={this.state.users[1].name} age={this.state.users[1].age}>Hobbies:{this.state.users[1].hobbies}</Person>
        <Person name={this.state.users[2].name} age={this.state.users[2].age}>Hobbies:{this.state.users[2].hobbies}</Person>



      </div>
    );
  }
}

export default App;
