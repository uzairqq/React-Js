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
  ChangeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br /><br />
        {this.state.name}
        <button onClick={() => this.ChangeName('ashar')}> Change State using anonymous function</button>
        <button onClick={this.ChangeName.bind(this, 'pasha')}> Change State using bind function</button>
        <input type="text" onChange={this.ChangeNameFromInput} value={this.state.name} />
        <br />
        {this.state.name}
      </div>
    );
  }
}

export default App;