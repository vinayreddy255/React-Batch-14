import React, { Component } from "react";

class Rectangle extends Component {
  constructor() {
    super();
    this.state = { signal: true };
  }
  changeSignal = () => {
    this.setState({ ...this.state, signal: !this.state.signal });
  };
  render() {
    return (
      <div>
        <h1>Rectangle</h1>
        <div
          className={`reactangel ${
            this.state.signal ? "greenSignal" : "redSignal"
          }`}
        ></div>
        <button onClick={this.changeSignal}>Signal Changing</button>
      </div>
    );
  }
}
export default Rectangle;
