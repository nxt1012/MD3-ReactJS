//rfc
import React, { useState } from "react";

export default function DemoUseState() {
  // Có 2 loại component: class component và function component
  // Từ phiên bản 16.8.x đã chuyển sang sử dụng function component
  // Cách khai báo state trong function component

  // Trong đó:
  // + nameState: tên state
  // + setNameState: hàm để thay đổi lại giá trị cho nameState
  // + initState: giá trị khởi tạo của nameState

  // Kiểu dữ liệu:
  // Kiểu dữ liệu nguyên thủ: number, string, boolean...
  // number:
  const [count, setCount] = useState(0);

  // string
  const [text, setText] = useState("Back-off");
  const handleChangeState = () => {
    setText("Step-up");
  };

  // boolean
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // Kiểu dữ liệu tham chiếu: Array, Object
  // Array
  const [arrList, setArrList] = useState([1, 2, 3, 4]);
  const handleRandomNumber = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // Array + Object
  const [listUser, setListUser] = useState([
    { id: 1, name: "John", age: 13 },
    { id: 2, name: "Peter", age: 14 },
    { id: 3, name: "Cook", age: 15 },
  ]);

  // Object
  const [objList, setObjList] = useState({ count: 10, arr: [1, 3, 5, 7] });
  const handleRandom = () => {
    setObjList({
      count: objList.count,
      arr: [...objList.arr, Math.floor(Math.random() * 10)],
    });
  };
  return (
    <div>
      <h2>Demo useState</h2>
      <h3>Number</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <h3>String</h3>
      <p>{text}</p>
      <button onClick={handleChangeState}>Change</button>
      <h3>Boolean</h3>
      {toggle ? (
        <div>
          <p>True</p>
          <button onClick={handleToggle}>Toggle</button>
        </div>
      ) : (
        <div>
          <p>False</p>
          <button onClick={handleToggle}>Toggle</button>
        </div>
      )}
      <h3>Array: </h3>
      <p>{arrList.toString()}</p>
      <button onClick={handleRandomNumber}>Random Number</button>
      <hr />
      <h3>List User</h3>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {listUser.map((element, index) => (
          <tr key={index}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.age}</td>
          </tr>
        ))}
      </table>
      <hr />
      <h3>Object</h3>
      <p>{objList.count}</p>
      <button onClick={() => setObjList({ count: objList.count + 1 })}>
        Up
      </button>
      <button onClick={() => setObjList({ count: objList.count - 1 })}>
        Down
      </button>
      
      <p>{objList.arr.toString()}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
