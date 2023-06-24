import React, { Component } from 'react'
import Form from './Form'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Test text"
        }
    }
    // Cần phải chặn sự kiện ở trên App.jsx luôn để tránh việc render/reload lại trang khi nhấn vào ParentComp
    handleChange = (event) => {
        event.preventDefault();
        this.setState({ text: "Changed text" })
    }
  render() {
    return (
      <div>
        {/* Do thẻ muốn tác động nằm trên App.jsx chứ không nằm trong Form.jsx nên đối tượng cần truyền qua props ở đây phải là nguyên hàm */}
        <Form handleChange={this.handleChange}/>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
