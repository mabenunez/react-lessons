import React, { Component } from 'react';
import ThemeContext from '../contexts/ThemeContext'

class Four extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return (
      <div>
          Four
      </div>
    )
  }
}

export default Four;
