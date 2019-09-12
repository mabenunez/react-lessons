import React, { Component } from 'react';
// import './App.css';

class CardSection extends Component {

  render(){
    return (
        <li>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
        </li>
    )
  }
}
export default CardSection;