import React, { Component } from 'react';
import appCss from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.users.map((pers, index) => {
            return <ErrorBoundary
              key={pers.id}
            > <Person
                deletePerson={() => this.deletePersonMethod(index)}
                name={pers.name}
                age={pers.age}
              /></ErrorBoundary>
          })

          }
        </div>
      );
      btnClass = appCss.red;
    }
    let styleClases = [];
    if (this.state.users.length <= 2) {
      styleClases.push(appCss.red);
    }
    if (this.state.users.length <= 1) {
      styleClases.push(appCss.Bold);
    }
    return (
      <div className={appCss.App}>
        <h1>Hi I am React app</h1>
        <p className={styleClases.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsMethod}>Switch Here</button>
        {persons}

      </div>
    );
  }
}

export default App;
