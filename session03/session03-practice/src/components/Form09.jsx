import React, { Component } from 'react'

export default class Form09 extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value});
  }
// Hàm validateEmail được khai báo ở đây để sau này gọi (khai báo dạng arrow function)
// Trong trường hợp này sẽ khai báo một const để lưu chuỗi Regex pattern dùng cho việc test xem email có đúng định dạng hay không
// Chuỗi Regex pattern được bắt đầu và kết thúc bởi dấu /
// Để test định dạng của một chuỗi ký tự sử dụng chuỗi Regex đã tạo, sử dụng cú pháp chuỗi_Regex.test(chuỗi_ký_tự)
// Kết quả của hàm trên sẽ là true hoặc false
// Do muốn kết quả khi chạy hàm validateEmail khi truyền đối số vào là true hoặc false tương ứng nên sẽ sử dụng từ khóa return để trả về giá trị tương ứng
  validateEmail = (email) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
// Hàm handleSubmit xử lý các vấn đề sau:
// + chặn sự kiện load trang mặc định của sự kiện onSubmit
// + kiểm tra email nhập vào và đưa ra phản hồi phù hợp với các trường hợp: để trống, không đúng định dạng và đúng định dạng
  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.value){
      alert("Email không được để trống");
    } else if (!this.validateEmail(this.state.value)){
      alert("Email chưa đúng định dạng");
    } else {
      console.log(this.state.value)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input value={this.state.value} type="text" onChange={this.handleChange} /> Email
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}