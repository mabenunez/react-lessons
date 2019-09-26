import React, { Component } from 'react';
import ThemeContext from '../contexts/ThemeContext'

class Four extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return (
      <div>
          Four
          <h2>{this.context}</h2>
      </div>
    )
  }
}

export default Four;
