import React, { Component } from 'react';
import Button from './components/button/Button'
import './App.css'; //JS asume que los archivos a los que no le ponemos extensión, son archivos .js

class App extends Component {
  render() {
    return (
      <div>
        <Button></Button>
      </div>
    )
  }
}

export default App;
