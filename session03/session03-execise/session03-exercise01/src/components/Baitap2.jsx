import React, { Component } from 'react'

export default class Baitap2 extends Component {
    constructor() {
        super();
        this.state = {
            employeeCode: "",
            db: ["RA01", "RA02", "RA03", "RA04", "RA05", "RA06", "RA07", "RA08", "RA09", "RA10", ]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //search for a match EmployeeCode from db and return the result in an alert box
        if ({/* the input field is left empty */}){
            alert("Mã nhân viên không được để trống")


        } else if ({/* there is a match in db */}) {
            alert("Mã nhân viên đã tồn tại trong hệ thống")
        } else {
            //add a new employee into the db
            alert("Thêm mã nhân viên thành công")
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="employeeCode">
                <input type="text" id="employeeCode" value={this.state}/> EmployeeCode
                <button type="submit">Submit</button>
            </label>
        </form>
      </div>
    )
  }
}
