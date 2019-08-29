import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      name: ''
    }
    console.log('Constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    //Acá iría el FETCH a una API
    //Veremos que el componentDidMount y render se ejecutan de nuevo, porque hacemos setState
    this.setState({
      name: 'Mabe'
    })
    console.log('componentDidMount')
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
