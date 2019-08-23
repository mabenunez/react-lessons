import React, { Component } from 'react';
import '../../App.css';
/*
//Si tengo un componente funcional, debo recibir las props como parámetro en la función:
function Titulo(props) {
    return (
        <div>
            <h2>{props.text}</h2>
        </div>
    )
}
*/
class Titulo extends Component {
    render() {
        return (
            <div className={'displayHorizontal'}>
                <h2>{this.props.text}</h2>
                <div className={'dotted'}></div>
                {/*<Puntitos></Puntitos>*/}
            </div>
        )
    }
}
export default Titulo;