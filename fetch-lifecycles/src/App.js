import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      name: ''
    }
  }
  componentDidMount() {
    const data = fetch('https://api.mercadolibre.com/sites/MLA/search?q=tv');
    //El resultado es una promise(asincrónico por defecto). El metodo por defecto es GET.
    console.log(data)
  }
  render() {
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
