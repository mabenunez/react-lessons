import React, { Component } from 'react';
import StartupCard from './StartupCard'
import '../../App.css';

class CardSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            startups : [
                {name: 'Changa', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'},
                {name: 'publica.la', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'},
                {name: 'Lution Bot', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'},
                {name: 'Tan Intensa', description: 'rokmwoekrmcwoekrcmwoekmrcowekmrcwoekmcweokmcokewrmc'}
            ],
            results: [] 
        }
    }
  render(){
    let startupCards = this.state.startups.map((startup, startupId, startupArr) => {
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