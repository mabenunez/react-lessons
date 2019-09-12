import React from 'react';


class Input extends React.Component {
    
    getValue() {
        this.props.propDePrueba()
    }
  render() {
    return (
      <div>
          <input name={this.props.name} type='text'/>
      </div>
    )
  }
}
export default Input;
