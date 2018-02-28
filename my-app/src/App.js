import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    name: "uzair"
  }

  ChangeName = (newName) => {
    this.setState({
      name: newName
    })
  }
  render() {
    return (
      <div className="App">
        <br /><br />
        {this.state.name}
        <button onClick={() => this.ChangeName('ashar')}> Change State</button>
        <br />
      </div>
    );
  }
}

export default App;