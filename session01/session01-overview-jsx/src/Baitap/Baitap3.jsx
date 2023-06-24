import React, { Component } from 'react'

export default class Baitap3 extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount(){
    setInterval(() => this.setState({date: new Date()}), 1000)
  }
    render() {
    return (
      <div>
        <h1>Xin chào các bạn!</h1>
        <h2>Bây giờ là {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
    }