import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

function SayHello() {
  return <h1>hello world</h1>
}
class App extends Component {
  render() {
    return (
      <SayHello />
    );
  }
}

export default App;