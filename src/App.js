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

  changeValuesMethod = (event) => {
    this.setState({
      users: [
        { name: "uzairs", age: 222, hobbies: "Crickets" },
        { name: event.target.value, age: 233, hobbies: "Footballs" },
        { name: "sarmads", age: 225, hobbies: "Snookers" }
      ],
      showPerson: false
    })
  }

  newName = "uzairsssssss!!"
  SwitchNameMethod = (newName) => {
    this.setState({
      users: [
        { name: newName, age: 222, hobbies: "Crickets" },
        { name: "laraibs", age: 233, hobbies: "Footballs" },
        { name: "sarmads", age: 225, hobbies: "Snookers" }
      ]
    })
  }
  togglePersonsMethod = () => {
    const dowork = this.state.showPerson;
    this.setState({ showPerson: !dowork })
  }
  render() {
    const buttonStyle = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let person = null;
    if (this.state.showPerson) {
      person =
        <div>
          <Person methodClick={this.SwitchNameMethod} name={this.state.users[0].name} age={this.state.users[0].age}>Hobbies:{this.state.users[0].hobbies}</Person>
          <Person changedName={this.changeValuesMethod} name={this.state.users[1].name} age={this.state.users[1].age}>Hobbies:{this.state.users[1].hobbies}</Person>
          <Person name={this.state.users[2].name} age={this.state.users[2].age}>Hobbies:{this.state.users[2].hobbies}</Person>
        </div>
    }

    return (
      <div className="App">
        <button
          style={buttonStyle}
          onClick={this.togglePersonsMethod}>Switch Here</button>
        {person}

      </div>
    );
  }
}

export default App;
