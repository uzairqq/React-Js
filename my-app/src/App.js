import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  onGreet() {
    alert('hello word from parent component');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name="uzair" initiallAge={20} greet={this.onGreet} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
