import React, {useState} from 'react'

export default function Click() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>Bạn đã click {count} lần</p>
        <button onClick={() => setCount( count + 1 )}>Click để tăng số lần click</button>
    </div>
  )
}
