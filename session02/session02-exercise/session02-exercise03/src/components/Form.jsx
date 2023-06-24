import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // Chặn sự kiện reload lại trang của submit
    handleChange = (event) => {
        event.preventDefault();
        console.log("hello")
    }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleChange}>
            <input />
            <button type="submit">Hi there</button>
        </form>
      </div>
    )
  }
}
