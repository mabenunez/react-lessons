import React, { Component } from 'react';
import '../../App.css';

class SearcInput extends Component {
    handleChange(e) {
        const val = e.target.value
        this.props.handleCallback(val)
    }
  render(){
    return (
        <React.Fragment>
          <input placeholder={'Buscar'} onChange={(e) => this.handleChange(e)}/>
        </React.Fragment>
    )
  }
}
export default SearcInput;