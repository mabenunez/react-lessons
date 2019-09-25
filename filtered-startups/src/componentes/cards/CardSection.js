import React, { Component } from 'react';
import StartupCard from './StartupCard'
import '../../App.css';

class CardSection extends Component {
  render(){
    let startupCards = this.props.startups.map((startup, startupId, startupArr) => {
        return (
            <StartupCard 
                key={startupId}
                name={startup.name}
                description={startup.description}
            />
        )
    })
    return (
        <ul>
          {startupCards}
        </ul>
    )
  }
}
export default CardSection;