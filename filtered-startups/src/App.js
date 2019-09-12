import React, { Component } from 'react';
import CardSection from './componentes/cards/CardSection';
import SearchBar from './componentes/bar/SearchBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

  }
  handleCallback(val) {
    console.log(val)
  }
  render(){
    return (
      <div>
        <SearchBar handleCallback={(val) => this.handleCallback(val)}></SearchBar>
        <section>
          <CardSection></CardSection>
        </section>
      </div>
    )
  }
}
export default App;
