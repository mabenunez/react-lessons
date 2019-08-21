import React, { Component } from 'react';

class Button extends Component {
    render() {
        
        return (
            <div>
                <button>{this.props.text}</button>
            </div>
        )
    }
}

export default Button;

/*Las props son Propiedades inmutables:
no podemos reasignar el valor de una prop en el componente hijo. Como en: 
this.props.text = 0 //por ejemplo
*/