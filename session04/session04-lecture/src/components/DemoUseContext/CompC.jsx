import React, { useContext } from 'react'
import "./ParentContext.css"
import { themeContext } from './ParentContext'

export default function CompC() {
    const themeFromContext = useContext(themeContext)
  return (
    <div>
        {/* <p className={themeFromB}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, quia tempore a sequi dicta deserunt impedit esse incidunt molestias minus at, repellat explicabo similique! Eos voluptatum aspernatur fugit cumque?
        </p> */}
    <p className={themeFromContext}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, quia tempore a sequi dicta deserunt impedit esse incidunt molestias minus at, repellat explicabo similique! Eos voluptatum aspernatur fugit cumque?
        </p>
    </div>
  )
}
