import React, { Component } from "react";

export default class ChildrenComp extends Component {
  //State:
  //State dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi được dữ liệu
  //Để sử dụng được state cần khai báo lớp bằng constructor và sử dụng super() để gọi lớp cha
  //Để cập nhật lại state => sử dụng setState
  constructor() {
    super();
    this.state = {
      studentA: "Nam Anh",
      question: "Is usually disappeared?",
      answer: "",
      display: true,
    };
    // Cách định nghĩa từ khóa this
    // this.handleToggleDisplay = this.handleToggleDisplay.bind(this)
  }
  // handleChangeState = () => {
  //   this.setState({
  //     answer: "Yes",
  //   });
  // };

  // Khai báo bằng arrow function
  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  }

  // Khai báo với function thường => không chạy được, do từ khóa this trỏ đến đối tượng đã gọi nó
  // Nếu muốn dùng function thường thì cần định nghĩa từ khóa this bằng hàm bind (như trên) với từ khóa this
  

  render() {
    return (
      <div>
        {/* Nhận props từ component cha */}
        <h2>
          {this.props.titleParent} - Khóa học: {this.props.course}
        </h2>
        <p>{this.props.children}</p>
        <h2>State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.answer}
        </p>
        {/* Quy tắc đặt tên:
      với các hàm xử lý một việc gì đó => sẽ có tiền tố đó là handle
      Với các hàm xử lý một sự kiện gì đó => sẽ có tiền tố là on
      */}
        <button onClick={this.handleToggleDisplay}>Click!!!</button>
        {/* Cập nhật state liên tục */}
        {this.state.display ? (
          <div>
            <p>Question 1?</p>
            <p>Yes</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        ) : (
          <div>
            <p>Question 1?</p>
            <p>Absolutely!</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        )}
      </div>
    );
  }
}
