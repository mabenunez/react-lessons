import React, { Component } from 'react';
import Button from './components/button/Button';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputOne : null,
      inputTwo : null,
      result : null
    }
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ 
      [name] : parseInt(value) 
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
        <input name='inputOne' onChange={e => this.handleChange(e, 'inputOne')}></input> {/*name es un atributo de las etiquetas html, debe ser el mismo que pusimos como key en el state*/}
        <input name='inputTwo' onChange={e => this.handleChange(e, 'inputTwo')}></input>
        <div onClick={() => this.suma()}> 
          <Button text={'Suma!'}></Button>
        </div>
        <p>{this.state.result}</p>
      </div>
    )
  }
}
//onClick={this.suma(this.inputOne, this.inputTwo)}
export default App;