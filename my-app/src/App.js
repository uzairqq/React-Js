import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

function SayHello() {
  return <h1>heloo world uzair here</h1>
}
class App extends Component {
  render() {
    return (
      <SayHello>hello</SayHello>
    );
  }
}

export default App;