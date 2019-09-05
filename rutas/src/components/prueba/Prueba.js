import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Prueba extends Component {
    render() {
      return (
        <React.Fragment>
          <div>
              <span>Prueba</span>
          </div>
          <Link to={'/carrito'}>IR AL CARRITO</Link>
        </React.Fragment>
      );
    }
  }
  
  export default Prueba;