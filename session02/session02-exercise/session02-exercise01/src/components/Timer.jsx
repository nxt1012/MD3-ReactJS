import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ countdown: 30 });
//     }, 100);
//   }
  render() {
    return <div>
        <h3>Timer: {this.props.time}</h3>
    </div>;
  }
}
