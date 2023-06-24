import React, { Component } from "react";

export default class DemoForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      age: "",
      course: "",
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // Cần cho tên biến vào trong [] để tên biến (key) có thể biến động
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tên sinh viên là ${this.state.studentName}
    Tuổi: ${this.state.age}
    Khóa học; ${this.state.course}`);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Tên sinh viên:</label>
          <input
            name="studentName"
            onChange={this.handleChange}
            value={this.state.studentName}
            type="text"
          />
          <br />
          <label htmlFor="">Tuổi: </label>
          <input
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
            type="text"
          />
          <br />
          <label htmlFor="">Chọn khóa học: </label>
          <select
            name="course"
            onChange={this.handleChange}
            value={this.state.course}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="ReactJS">ReactJS</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
