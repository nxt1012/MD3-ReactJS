import React, { Component } from 'react'
import Button from './Button'

export default class App extends Component {

  render() {
    return (
      <div>
      <Button buttonText={"Click Me"} buttonColor={"red"} buttonBackgroundColor={"blue"} />
      </div>
    )
  }
}
