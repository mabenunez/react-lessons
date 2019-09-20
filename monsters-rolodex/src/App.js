import React from 'react';
import {CardList} from './components/card-list/CardList.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  /* Promises
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters : users}))
  }*/
  async componentDidMount() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const jsonData = await data.json()
      this.setState({
        monsters : jsonData
      })
    } catch (err){
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <input 
          type='search'
          placeholder='search monsters '
          onChange={(e) => this.setState({ searchField : e.target.value }, () => console.log(this.state.searchField))}
        />
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    )
  }
}
export default App;
