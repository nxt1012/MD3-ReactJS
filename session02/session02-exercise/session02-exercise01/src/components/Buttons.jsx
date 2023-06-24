import React, { Component } from 'react'

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    )
  }
}
