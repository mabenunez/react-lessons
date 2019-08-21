import React, { Component } from 'react';
//import Input from './components/input/Input';
import Button from './components/button/Button';
import './App.css'; //JS asume que los archivos a los que no le ponemos extensión, son archivos .js

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputOne : null,
      inputTwo : null,
      result : null
    }
  }
  //necesito los valores de cada input 
  handleChange = (e, name) => {
    console.log(name)
    this.setState({ //set state si no encuentra un estado, lo crea
      [name] : parseInt(e.target.value) //si meto entre [] busca una variable con el nombre que esté dentro
    })
  }

  suma() {
    const sum = this.state.inputOne + this.state.inputTwo
    this.setState({
      result : sum
    })
    console.log(this.state.result)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <input onChange={e => this.handleChange(e, 'inputOne')}></input> {/*e solo lo pasamos si queremos obtener un valor de ese momento*/}
        <input onChange={e => this.handleChange(e, 'inputTwo')}></input>
        <div onClick={() => this.suma()}> 
          <Button text={'Suma!'}></Button> {/*cuando llamamos a un componente, los eventos no los ejecuta como tal; sino que pasa eso como el nombre de una prop*/}
        </div>
        <p>{this.state.result}</p>
      </div>
    )
  }
}
//onClick={this.suma(this.inputOne, this.inputTwo)}
export default App;