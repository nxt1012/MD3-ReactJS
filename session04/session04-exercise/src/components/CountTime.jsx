import React, {useEffect, useState} from 'react'

export default function CountTime() {
    const [miliseconds, setMiliseconds] = useState(0);
    const [state, setState] = useState(false);
    const handleStart = () => {

        var interval = setInterval(() => {setMiliseconds(miliseconds+1)},1);
    }
    
    // useEffect(() => {
    //     const interval = setInterval(() => {setMiliseconds(miliseconds+1)},1);
    //     return () => clearInterval(interval);
    // });
  return (
    <div>
        <h1>Đếm thời gian: {miliseconds}
            {/* format thời gian */}
        </h1>
        <button onClick={handleStart}>Bắt đầu
            {/* setInterval
            get state, update state */}
        </button>
        <button onClick={() => setState(false)}>Dừng
            {/* clearInterval */}
        </button>
    </div>
  )
}
