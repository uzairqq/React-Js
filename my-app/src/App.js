import React, { Component } from 'react';
import './App.css';

const Temp = (props) => {
  console.log('Rendered Temp Component')
  return (
    <div>
      <div>Hi {props.val}</div>
      <div>Hello</div>
    </div>
  )
}



class App extends Component {
  state = {
    val: Math.random
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 }
      })
    }, 2000)
  }

  render() {
    console.log('Rendered App Component')
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;