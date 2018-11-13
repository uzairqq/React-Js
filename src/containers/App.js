import React, { Component } from 'react';
import appCss from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/cockpit';

class App extends Component {
  state = {
    users: [
      { id: 1, name: "uzair", age: 22, hobbies: "Cricket" },
      { id: 2, name: "laraib", age: 23, hobbies: "Football" },
      { id: 3, name: "sarmad", age: 25, hobbies: "Snooker" }

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

  deletePersonMethod = (personIndex) => {
    const persons = this.state.users.slice();
    // const persons = [...this.state.users];
    persons.splice(personIndex, 1);
    this.setState({ users: persons })
  }
  togglePersonsMethod = () => {
    const dowork = this.state.showPerson;
    this.setState({ showPerson: !dowork })
  }
  render() {


    let persons = null;
    if (this.state.showPerson) {
      persons =
        <Persons persons={this.state.users}
          clicked={this.deletePersonMethod}
          changed={this.changeValuesMethod}
        />
    }

    return (
      <div className={appCss.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.users}
          clicked={this.togglePersonsMethod} />
        {persons}

      </div>
    );
  }
}

export default App;
