import React, { Component } from "react";

export default class PracticeForm06 extends Component {
  // Khởi tạo state để lưu tất cả các giá trị thuộc phạm vi quản lý của component: name, email, message, error, success
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

  // Khai báo các hàm xử lý sự kiện thuộc phạm vi xử lý của component: Change, Submit
  handleChange = (event) => {
    // Sử dụng Destructuring để lấy giá trị của name và value ra khỏi event.target (đối tượng mà event trỏ tới)
    const { name, value } = event.target;
    // Sử dụng Dynamic name để setState động tương ứng. Để đạt được yêu cầu này thì cần
    // set attribute name của từng trường dữ liệu tương ứng với các key nằm trong state để khi cập nhật có thể cập nhật vào đúng vị trí và
    // cần để name vào trong [] ở dạng [name], đây là cú pháp để tên có thể biến động
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    // Như thường lệ thì cần chặn sự kiện mặc định đối với onSubmit
    event.preventDefault();
    // Tiếp đó là lại sử dụng Destructuring để trích xuất giá trị name, email, message ra khỏi state
    const { name, email, message } = this.state;
    // Do nằm trong form nên cần xử lý vấn đề validate form
    // Trường hợp có bất kỳ trường nào trong số 3 trường name, email, message bị bỏ trống thì
    if (!name || !email || !message) {
      // trường hợp 1 trong 3 trường name, email, message bị bỏ trống thì thay đổi giá trị của error trong state
      this.setState({
        error: "Họ tên, email và nội dung tin nhắn không được bỏ trống",
      });
      // Cập nhật xong giá trị của error thì component tự động render lại và thoát ra khỏi hàm handleSubmit (bỏ qua phần TODO ở phía sau)
      return;
    }
    // Nếu không có trường nào bị bỏ trống thì if sẽ không chạy mà sẽ chạy dòng lệnh dưới đây (đổi giá trị của success thành true và render kết quả tùy thuộc vào giá trị của sucess )
    // TODO: handle form submission
    this.setState({ success: true });
  };

  render() {
    return (
      <div>
        {/* render kết quả tùy thuộc vào giá trị của !success */}
        {!this.state.success ? (
          /* trường hợp success nhận giá trị bằng false thì sẽ  render ra form để cho người dùng nhập liệu*/ <form
            onSubmit={this.handleSubmit}
          >
            {/* Hiển thị thông báo lỗi nếu một trường nào đó bị bỏ trống */}
            {/* Khi một trường nào đó bị bỏ trống thì error sẽ không còn null nữa mà được gán giá trị
                trong trường hợp này this.state.error có thể coi là bị ép kiểu về true, và khi dùng với && thì render ra nội dung phía sau */}
            {this.state.error && (
              <div style={{ color: "red" }}>{this.state.error}</div>
            )}
            <div>
              {/* Tạo form bình thường, nhớ rằng giá trị của htmlFor và id là trùng nhau, 
              cần đặt giá trị của name tương ứng với key trong state, ư
              value trỏ tới key tương ứng trong state và tên các sự kiện tương ứng */}
              <label htmlFor="name">Họ tên:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Nội dung tin nhắn:</label>
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            {/* Button cần phải đưa vào trong Form thì mới có hiệu lực */}
            <button type="submit">Gửi tin nhắn</button>
          </form>
        ) : (
          /*Trường hợp success nhận giá trị là true thì sẽ render ra nội dung dưới đây (tin nhắn đã được gửi thành công, màu xanh)*/ <div
            style={{ color: "green" }}
          >
            Tin nhắn đã được gửi thành công!
          </div>
        )}
      </div>
    );
  }
}
