import React, { Component } from 'react';
import '../../App.css';

class CardsVertical extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className={'cardVertical'}>
                <div className={'cardIconContainer'}>
                    <img src={this.props.icon}></img>
                </div>
                <div>
                    <h4>{this.props.contentTitle}</h4>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}
export default CardsVertical;