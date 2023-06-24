import React, { Component } from "react";

export default class Form07 extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Giá trị nhập vào từ ô Input là: ${this.state.value}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input value={this.state.value} onChange={this.handleChange} type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
