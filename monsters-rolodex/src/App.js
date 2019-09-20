import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters : []
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
        <ul>
          {this.state.monsters.map((monster, monsterId) => {
            return (
              <li key={monsterId}>{monster.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default App;
