import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            color: this.props.buttonColor,
            backgroundColor: this.props.buttonBackgroundColor,
          }}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}
