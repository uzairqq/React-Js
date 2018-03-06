import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    var user = {
      name: "uzair",
      hobbies: ["sports", "cricket"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={user.name} age={20} hobby={user.hobbies} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
