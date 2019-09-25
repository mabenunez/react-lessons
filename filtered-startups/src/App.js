import React, { Component } from 'react';
import CardSection from './componentes/cards/CardSection';
import SearchBar from './componentes/bar/SearchBar'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      startups : [
        {name: 'Changa', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'},
        {name: 'publica.la', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'},
        {name: 'Lution Bot', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'},
        {name: 'Tan Intensa', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'}
      ],
      searchField : ''
    }
  }
  handleCallback(val) {
    this.setState({
      searchField : val
    })
  }
  render(){
    const { startups, searchField } = this.state

    const filteredStartups = startups.filter(company => 
      company.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div>
        <SearchBar handleCallback={(val) => this.handleCallback(val)}/>
        <section>
          <CardSection startups={filteredStartups}/>
        </section>
      </div>
    )
  }
}
export default App;
