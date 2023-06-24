import React, { Component } from "react";

export default class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handlechange = (event) => {
    this.setState({ text: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nội dung là: " + this.state.text);

  }
  render() {
    console.log(this.state.value);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Student Name:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
