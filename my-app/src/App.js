import React, { Component } from 'react';
import './App.css';
import User from './components/user'

class App extends Component {
  state = {
    users: [
      { id: 'abcd', name: "uzair", age: 20 },
      { id: 'efgh', name: "laraib", age: 30 },
      { id: 'ijklm', name: "pasha", age: 40 }
    ]
  }
  DeleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
              return (<User age={user.age} key={user.id} deleteEvent={this.DeleteUser.bind(this, index)}>{user.name}</User>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;