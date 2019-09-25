import React, { Component } from 'react';
import './App.css';
import One from './components/One.component';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <One></One>
      </div>
    )
  }
}

export default App;
