import React, { Component } from 'react';
import './App.css';
import Child from './parentToChild/child';


class App extends Component {
  state = {
    title: 'Placeholder Title'
  }
  changeTheWorld = (newTitle) => {
    this.setState({
      title: newTitle
    })
  }
  render() {
    return (
      <div className="App">
        <Child doWhatEver={this.changeTheWorld.bind(this, 'uzair')} title={this.state.title} />
      </div>
    );
  }
}

export default App;