import React, { Component } from 'react';
import '../../App.css';

class CardsColors extends Component {
    render() {
        return (
            <div className={'cardsColors'}>
                <div className={'cardTitleColor'}>
                    <h3>{this.props.cardTitle}</h3>
                </div>
                <div>
                    <h4>{this.props.contentTitle}</h4>
                    <p>{this.props.content}</p>
                </div>
            </div>
            
        )
    }
}
export default CardsColors;