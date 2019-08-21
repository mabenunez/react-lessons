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
  handleChangeOne = (e) => {
    console.log( e.target.value)
    this.setState({
      inputOne : parseInt(e.target.value)
    })
    console.log(this.state.inputOne)
  }
  handleChangeTwo = (e) => {
    console.log( e.target.value)
    this.setState({
      inputTwo : parseInt(e.target.value)
    })
    console.log(this.state.inputTwo)
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
        <input onChange={e => this.handleChangeOne(e)}></input> {/*e solo lo pasamos si queremos obtener un valor de ese momento*/}
        <input onChange={e => this.handleChangeTwo(e)}></input>
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