import React, { Component } from 'react'
import Timer from './Timer'
import Buttons from './Buttons'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            isRunning: true,
        };
    }
    // Viết 3 hàm/ handleStart, handleStop, handleReset
    handleStart = () => {
        setInterval(() => this.setState(
            (prevState) => ({time: prevState.time + 1})
        ), 1000);
        this.setState({isRunning: true});
    }
    handleStop = () => {}
    handleRes = () => {}
  render() {
    //destructuring hoặc gán biến phải nằm ở trong render() và trước return()
    const {time} = this.state;
    return (
      <div>
        <Timer time={time}/>
        <Buttons />
      </div>
    )
  }
}
