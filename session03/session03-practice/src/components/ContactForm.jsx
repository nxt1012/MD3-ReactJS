import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      error: null,
      success: false,
    };
  }

  handleChange = (event) =>{
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    if (!name || !email || !message) {
      this.setState({
        error: "Họ tên, email và nội dung tin nhắn không được bỏ trống",
      });
      return;
    }

    this.setState({ success: true });
  }
  render() {
    return (
      <div>
        {!this.state.success ? (
          <form onSubmit={this.handleSubmit}>
            {this.state.error && (
              <div style={{ color: "red" }}>{this.state.error}</div>
            )}
            <div>
              <label htmlFor="name">Họ tên: </label>
              <input
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
              />
            </div>
            <div>
              <label htmlFor="message">Nội dung tin nhắn: </label>
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
               />
            </div>
            <button type="submit">Gửi tin nhắn</button>
          </form>
        ) : (
          <div style={{ color: "green" }}>Tin nhắn đã được gửi thành công</div>
        )}
      </div>
    );
  }
}
