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

  deletePersonMethod = (personIndex) => {
    const persons = this.state.users;
    persons.splice(personIndex, 1);
    this.setState({ users: persons })
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

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.users.map((pers, index) => {
            return <Person deletePerson={() => this.deletePersonMethod(index)} name={pers.name} age={pers.age} />
          })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <button
          style={buttonStyle}
          onClick={this.togglePersonsMethod}>Switch Here</button>
        {persons}

      </div>
    );
  }
}

export default App;
