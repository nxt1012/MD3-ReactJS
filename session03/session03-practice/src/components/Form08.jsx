import React, { Component } from "react";

export default class Form08 extends Component {
    constructor(){
        super();
        this.state = {
            selectedOption: "",
        }
    }
    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.selectedOption);
    };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="radio">
            <label>
              <input value="Male" onChange={this.handleChange} checked={this.state.selectedOption === "Male"} type="radio" />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input value="Female" onChange={this.handleChange} checked={this.state.selectedOption === "Female"} type="radio" />
              Female
            </label>
          </div>
          <div className="radio">
            <label>
              <input value="Other" onChange={this.handleChange} checked={this.state.selectedOption === "Other"} type="radio" />
              Other
            </label>
          </div>
          {this.state.selectedOption && <div>Selected option is: {this.state.selectedOption}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
