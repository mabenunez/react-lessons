import React, { Component } from 'react';
import Button from './components/button/Button'
import './App.css'; //JS asume que los archivos a los que no le ponemos extensión, son archivos .js

class App extends Component {
  render() {
    return (
      <div>
        {/* si necesito pasarlle una funcion al hijo, las palabras como onClick ya funcionan como
        props, por lo que conviene pasar la funcion como props y que el hijo la ejecute.
        O envolver el componente hijo en una etiqueta JSX y pasarle el evento a esa etiqueta */}
        <Button text={"Click me"}></Button>
        <Button text={"Erase"}></Button>
        <Button text={"Hello"}></Button>
      </div>
    )
  }
}

export default App;
