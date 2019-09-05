import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carrito from './components/carrito/Carrito';
import Prueba from './components/prueba/Prueba';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path={"/carrito"} component={Carrito}/>
          <Route path={"/prueba"} component={Prueba}/>
          
        </Router>
        
      </div>
    );
  }
}

export default App;
