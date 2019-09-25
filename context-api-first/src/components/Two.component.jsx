import React, { Component } from 'react';
import Three from './Three.component'

class Two extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          Two
          <Three></Three>
      </div>
    )
  }
}

export default Two;
