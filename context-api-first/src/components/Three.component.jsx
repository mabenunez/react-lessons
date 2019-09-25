import React, { Component } from 'react';
import Four from './Four.component'

class Three extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          Three
          <Four></Four>
      </div>
    )
  }
}

export default Three;
