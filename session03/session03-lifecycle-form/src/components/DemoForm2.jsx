import React, { Component } from "react";

export default class DemoForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
    };
  }
  handleChange = (event) => {
    this.setState({ course: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Khóa học bạn chọn là: " + this.state.course);
  };
  render() {
    return (
      // Học cách xử lý dữ liệu trong form có select với nhiều option
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Chọn khóa học</label>
          {/* Để lấy dữ liệu từ option trong select thì cần gắn sự kiện onChange/onInput vào thẻ select */}
          <select
            value={this.state.course}
            name=""
            id=""
            onChange={this.handleChange}
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
