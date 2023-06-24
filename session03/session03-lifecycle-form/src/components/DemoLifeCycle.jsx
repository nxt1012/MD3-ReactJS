import React, { Component } from 'react'

export default class DemoLifeCycle extends Component {
    UNSAFE_componentWillMount(){
        console.log("1. componentWillMount");
    }
    componentDidMount() {
        console.log("3. componentDidMount");
    }
    UNSAFE_componentWillReceiveProps(){

    }
    shouldComponentUpdate(){

    }
    UNSAFE_componentWillUpdate(){

    }
    componentDidUpdate() {

    }
    componentWillUnmount(){
        
    }
  render() {
    console.log("2. render");
    return (
      <div>DemoLifeCycle</div>
    )
  }
}
