import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLinking: "Products"
    }
  }
  onGreet() {
    alert('hello word from parent component');
  }

  onClickHeaderNameChange(newNames) {
    this.setState({
      homeLinking: newNames
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLinks={this.state.homeLinking} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name="uzair" initiallAge={20} greet={this.onGreet} changeLink={this.onClickHeaderNameChange.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
