import React, { Component } from 'react'

export default class App extends Component {
    // Đây là class components, nếu muốn dùng state thì cần phải gọi constructor và super
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
  render() {
    return (
        // các thuộc tính style ở đây là tùy chọn để hiển thị
      <div style={{textAlign: "center"}}>
        {/* hàm được viết theo kiểu số 4, arrow function, truyền đối số, hàm được gọi ở đây là setState, để làm thay đổi state của component, setState nhận một object làm đối số */}
        <button onClick={() => this.setState({value: this.state.value + 1})}> click me </button>
        <br />
        {/* mỗi lần state thay đổi, component sẽ được render lại, do đó kết quả ở dưới đây cũng sẽ thay đổi tương ứng */}
        <label>{this.state.value}</label>
      </div>
    )
  }
}
