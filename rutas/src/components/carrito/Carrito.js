import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Carrito extends Component {
    render() {
      return (
        <React.Fragment>
        <div>
            <span>Carrito</span>
        </div>
        <Link to={'/prueba'}>IR A LA PRUEBA</Link>
      </React.Fragment>
      );
    }
}
  
export default Carrito;
  