import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            initialState: 0,
        }
    }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h3>Số lần bấm của bạn là: {this.state.initialState}</h3>
        <button onClick={()=> this.setState({initialState: this.state.initialState + 1})}>Click</button>
      </div>
    )
  }
}
