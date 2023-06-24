import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo một state là textInput có giá trị khởi tạo là "" để lưu giá trị người dùng nhập từ input
        this.state = {
            textInput: "",
        };
        // Khai báo phương thức để sử dụng từ khóa this
        // Hàm được định nghĩa theo cách thông thường chứ không phải arrow function thì cần định nghĩa từ khóa this.
        this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    // Khởi tạo phương thức để cập nhật giá trị người dùng nhập vào ô input và lưu vào biến textInput
    // Khi có một sự kiện (onchange) thì gọi hàm setState để gán giá trị cho textInput là giá trị event.target.value, cũng có nghĩa là gán giá trị input cho textInput
    handleChangeInputValue(event){
        this.setState({
            textInput: event.target.value,
        })
    }
    // Khởi tạo phương thức khi có sự kiện submit form
    // Do nút nằm trong form => auto thành nút submit => nếu muốn thực hiện chức năng khác ngoài submit thì cần event.preventDefault(); và tự viết hàm của bản thân vào đây
    handleSubmitForm(event){
        event.preventDefault();
        // Do mỗi lần có thay đổi trong input thì giá trị tương ứng đã được lưu vào trong state và giao diện được render ra luôn, nên giờ khi muốn hiển thị giá trị cuối cùng ra alert thì chỉ cần lấy từ state.textInput ra
        alert("Bạn vừa nhập: "+this.state.textInput)
    }
  render() {
    return (
      <div>
        {/* phần onSubmit được khai báo trong thẻ mở của Form */}
        <form onSubmit={this.handleSubmitForm}>
            {/* để lấy giá trị trong một form có submit, cần phải gán thuộc tính value? */}
            <input value={this.state.textInput} onChange={this.handleChangeInputValue} />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
