import React, { Component } from 'react';

class Dinamica extends Component {
    
    render() {
        return (
            <div>
                <h1>Hola - {this.props.match.params.test}</h1>
            </div>
        )
    }
}
export default Dinamica;