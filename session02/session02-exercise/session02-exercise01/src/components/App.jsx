import React, { Component } from 'react'
import Timer from './Timer';
import Buttons from './Buttons';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
        }
    }
    handleStart = () => {
        console.log("start")
    }
    handlePause = () => {
        console.log("pause")
    }
    handleStop = () => {
        console.log("stop")
    }
  render() {
    return (
      <div>
        <Timer time={this.state.timeLeft}/>
        <Buttons label={"Start"}/>
        <Buttons label={"Pause"}/>
        <Buttons label={"Stop"}/>
      </div>
    )
  }
}
