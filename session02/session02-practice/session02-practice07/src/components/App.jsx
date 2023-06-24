import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      fontSize: 12,
      isShow: true,
      content: "hello baby :v!",
    };
  }
  handleToggle = () =>
    this.setState({
      isShow: !this.state.isShow,
    });

  handleChangeBackground = () => {
    this.setState({
      color: this.state.color === "black" ? "pink" : "black",
      fontSize: this.state.fontSize === 12 ? 14 : 12,
      content:
        this.state.content === "hello baby :v!"
          ? "U look so beautiful, honey!"
          : "hello baby :v!",
    });
  };
  render() {
    return (
      <div>
        {/* Sử dụng toán tử 3 ngôi để ẩn hiện đoạn văn và nút thay đổi định dạng của đoạn văn */}
        {/* Lưu ý là biểu thức toán tử ba ngôn được ba trọn trong dấu {} */}
        {this.state.isShow
            ? (<div>
                <p style={{color: this.state.color, fontSize: this.state.fontSize}}>{this.state.content}</p>
                <button onClick={this.handleChangeBackground}>Change</button>
            </div>)
            : ("")}
            <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}
