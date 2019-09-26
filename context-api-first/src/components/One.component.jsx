import React, { Component } from 'react';
import Two from './Two.component'
import { ThemeProvider } from '../contexts/ThemeContext'

class One extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : 'mabe'
    }
  }
  render() {
    return (
      <ThemeProvider value={this.state.name}>
        <div>
            One
            <Two></Two>
        </div>
      </ThemeProvider>
    )
  }
}

export default One;
