import React, { Component } from 'react'

export default class 
button extends Component {
    // EVENT WITH ARROW FUNCTIONS
    handleClick01 = () => {
        console.log("Click 01")
    }
    // trong jsx khi sử dụng một sự kiện => nếu sử dụng () thì hàm sẽ chạy ngay sau khi component mount
    handleClick02 = () => {
        console.log("Click 02")
    }
    // khi viết kiểu arrow function mà quên không thêm () vào sau hàm thì sẽ không chạy được => hay nói cách khác dấu () có 2 tác dụng: 1 là để gọi hàm thực thi, 2 là để truyền đối số vào
    handleClick03 = () => {
        console.log("Click 03")
    }
    // sử dụng để truyền đối số vào 
    handleClick04 = (element) => {
        console.log("Click 04")
        console.log(element)
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick01}>Click 1</button>
        {/* Thêm dấu () thì khi component được render là hàm sẽ được gọi luôn */}
        <button onClick={this.handleClick02()}>Click 2</button>
        {/*  */}
        <button onClick={() => this.handleClick03}>Click 3</button> 
        {/*  */}
        <button onClick={() => this.handleClick04("Hello World")}>Click 4</button> 
      </div>
    )
  }
}
