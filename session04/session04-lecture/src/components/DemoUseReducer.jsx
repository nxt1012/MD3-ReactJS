import React from "react";
import { useReducer } from "react";

export default function DemoUseReducer() {
  // Trong Hook, useReducer được cung cấp như một sự lựa chọn để thay thế cho useState
  // useState được sử dụng trong các component đơn giản
  // useReducer được sử dụng trong các component phức tạp hơn

  // Khi sử dụng useState
  // Bước 1: Khai báo giá trị ban đầu
  // Bước 2: Thực hiện các action (vd: count + 1, count - 1)

  // Khi sử dụng với Reducer:
  // Bước 1: Khai báo giá trị ban đầu
  // Bước 2: Thực hiện các action (vd: count + 1, count - 1)
  // Bước 3: Reducer
  // Bước 4: Dispatch

  // Ví dụ:
  // Bước 1: Khai báo giá trị ban đầu (initialState)
  const initialState = 0;

  <div>Demo useReducer</div>;
  // Bước 2: Khai báo các action
  const ACTION_UP = "UP";
  const ACTION_DOWN = "DOWN";
  const ACTION_RANDOM = "RANDOM";
  // Bước 3: Reducer
  // Reducer nhận 2 tham số:
  // Tham số 1: state hiện tại
  // Tham số 2: action
  // reducer sẽ xem state, action là gì để có thể xử lý
  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      // Để ý rằng ở đây dùng từ khóa return, do đó không cần để break; để sau nữa
      case ACTION_DOWN:
        return state - 1;
      case ACTION_RANDOM:
        return Math.floor(Math.random() * 10);
      default:
        break;
    }
  };
  // Bước 4: Dispatch
  // Khai báo giống useState nhưng tham số thứ 2 sẽ được đổi thành Dispatch
  // useReducer có thể nhận vào 3 đối số: 1. reducer, 2 .giá trị khởi tạo (initalState), 3 là side effects
  const [count, dispatch] = useReducer(reducer, initialState);
  // Khi muốn xử lý một sự kiện gì đấy thì sẽ phải sử dụng dispatch để gửi hành động lên cho reducer xử lý
  // dispatch là một hàm do useReducer trả về để lại tiếp tục có thể xử lý loạt hành động tiếp theo
  return (
    <div>
      <h2>Demo useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(ACTION_UP)}>UP</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>DOWN</button>
      <button onClick={() => dispatch(ACTION_RANDOM)}>RANDOM</button>
    </div>
  );
}
