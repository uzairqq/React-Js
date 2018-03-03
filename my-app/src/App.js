import React, { Component, Fragment } from 'react';
import './App.css';

const Temp = (props) => {
  return (
    <Fragment>
      <div >Hi {props.SomeString}</div>
      <div>Hello</div>
    </Fragment>
  )
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <Temp SomeString="uzair" />
      </div>
    );
  }
}

export default App;