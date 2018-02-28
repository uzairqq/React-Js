import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    name: "uzair"
  }

  ChangeName = () => {
    this.setState({
      name: "laraib"
    })
  }
  render() {
    return (
      <div className="App">
        <br /><br />
        {this.state.name}
        <button onClick={this.ChangeName}>Change State</button>
        <br />
      </div>
    );
  }
}

export default App;