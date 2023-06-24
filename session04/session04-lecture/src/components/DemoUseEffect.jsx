import React, { useState, useEffect } from 'react'

export default function DemoUseEffect() {
    // useEffect chủ yếu dùng để: callAPI, líten DOM event, update DOM, 
    // được thay thế cho componentDidMount, componentDidUpdate, componentWillUnmount
    // - Trường hợp 1: useEffect(callback)
    // Có 3 tính chất:
    // + useEffect (or Callback) sẽ luôn được gọi mỗi khi component mount
    // + useEffect (or Callback) sẽ được gọi mỗi khi component được re-render
    // + gọi callback ngay sau khi component thêm element vào DOM
    //
    // - Trường hợp 2: useEffect(callback, [])
    // => ở những phiên bản cũ thì [] được gọi là cleanUp, còn ở phiên bản mới thì gọi là dependencies
    // Tính chất:
    // + useEffect (or Callback) sẽ luôn được gọi mỗi khi component mount
    // + callback sẽ chỉ được gọi 1 lần khi component được re-render
    // 
    // 
    // - Trường hợp 3: useEffect(callback, [deps]) // deps: dependencies
    // Tính chất:
    // + useEffect (or Callback) sẽ luôn được gọi mỗi khi component mount
    // + callback sẽ được gọi mỗi khi dependencíe thay đổi
    // 
    // 
    // 
    // 
    // Trường hợp 2:
    const [text, setText] = useState("");
    // useEffect(() => {
    //     console.log("useEffect đang được chạy");
    // }, [])

    // Trường hợp 3
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect đang được chạy");
    }, [text, count])
  return (<>
    <h2>Demo useEffect</h2>
    <input type="text" onChange={(e) => setText(e.target.value)} />
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Up</button>
    <button onClick={() => setCount(count - 1)}>Up</button>
    {console.log("Component được re-render")}
    </>
  )
}
