import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            array: [],
            total: 0,
        }
    }
    // Khai báo phương thức quản lý sự thay đổi của ô input
    handleChangeInput = (event) => {
        this.setState({ number: +event.target.value});
    }
    // Khai bảo phương thức khi submit form thì hiển thị ra kết quả
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ 
            array: [...this.state.array, this.state.number],
            total: this.state.total + this.state.number,
            number: "",
        });
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="number" value={this.state.number} onChange={this.handleChangeInput} />
            <button type="submit">Add</button>
        </form>
        <span>Kết quả:</span>
        <div style={{color: "red"}}>
            {this.state.array.join("+") + "=" + this.state.total}
        </div>
      </div>
    )
  }
}
