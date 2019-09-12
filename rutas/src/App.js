import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carrito from './components/carrito/Carrito';
import Prueba from './components/prueba/Prueba';
import Dinamica from './components/dinamica/Dinamica'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path={"/carrito"} component={Carrito}/>
          <Route path={"/prueba"} component={Prueba}/>
          <Route path={'/dinamica/:test'} component={Dinamica}/>
        </Router>
        
      </div>
    );
  }
}

export default App;
