import React, { Component } from 'react'

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: "Tôi thấy hoa vàng trên cỏ xanh"
        }
    }
    handleChange = () => {
        this.setState({
            text: "Em đã thấy anh cùng người ấy"
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleChange}>Change Text</button>
      </div>
    )
  }
}
