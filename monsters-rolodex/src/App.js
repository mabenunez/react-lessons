import React from 'react';
import {CardList} from './components/card-list/CardList.component'
import {SearchBox} from './components/search-box/SearchBox.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

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
  handleChange = (e) => {
    this.setState({ searchField : e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())  
    )
    return (
      <main className={'App'}>
        {/* <input 
          type='search'
          placeholder='search monsters '
          onChange={(e) => this.setState({ searchField : e.target.value })}
        /> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters '
          handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </main>
    )
  }
}
export default App;
