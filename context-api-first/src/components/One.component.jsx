import React, { Component } from 'react';
import Two from './Two.component'
import { ThemeProvider } from '../contexts/ThemeContext'

class One extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ThemeProvider value={'CourseIt'}>
        <div>
            One
            <Two></Two>
        </div>
      </ThemeProvider>
    )
  }
}

export default One;
