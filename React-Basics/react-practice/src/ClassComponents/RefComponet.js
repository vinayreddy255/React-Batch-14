import React, { Component, createRef } from "react";

class RefComponet extends Component {
  constructor() {
    super();
    this.state = { userName: "" };
    this.inputRef = createRef();
  }
  changehandelr = (evnet) => {
    const { name, value } = evnet.target;
    this.setState({ ...this.state, [name]: value });
  };
  getInputData = () => {
    this.inputRef.current.value = "hello world";
    this.inputRef.current.style.backgroundColor = "red";
    this.inputRef.current.style.color = "#fff";
    // this.inputRef.current.focus();
  };
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" name="userName" />
        <button onClick={this.getInputData}>getInputData</button>
      </div>
    );
  }
}

export default RefComponet;
