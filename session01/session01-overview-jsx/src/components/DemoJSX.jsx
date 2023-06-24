import React, { Component } from 'react'

export default class DemoJSX extends Component {
  render() {
    const greeting = "Hello world!!!"
    const people = {
        name : "Nam Anh",
        course: "ReactJS",
    };
    return (
      <div>
        {/* Phép nội suy trong jsx */}
        {/* Lưu ý:
        + class => className
        + các thuộc tính sẽ được viết theo camelCase, ví dụ: background-color => backgroundColor
        + các sự kiện cũng sẽ được viết theo camelCase, ví dụ: onclick => onClick
        */}
        <h2 style={{backgroundColor: "pink", color: "white"}} className ="container">{greeting}</h2>
        <p>studentName: {people.name} - Khóa học: {people.course}</p>
      </div>
    )
  }
}
