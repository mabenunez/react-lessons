import React from 'react';
import Input from './componentes/input'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value1 : '',
      value2 : ''
    }
  }
  suma(value1, value2) {
    return (
      this.state.value1 + this.state.value2
    )
  }
  render() {
    return (
      <div>
        {/* <Input onChange={() => }/>
        <Input/> */}
        <input type='text'/>
        <input type='text'/>
        <button>Sumar</button>
      </div>
    )
  }
}
export default App;
