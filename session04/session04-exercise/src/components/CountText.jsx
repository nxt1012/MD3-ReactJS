import React, {useState} from 'react'

export default function CountText() {
    const [count, setCount] = useState(0);

    const handleCount = (event) => {
        setCount(event.target.value.length);
    }
  return (
    <div>
        <textarea onChange={handleCount} cols="30" rows="3"></textarea>
        <p>Số ký tự: {count}</p>
    </div>
  )
}