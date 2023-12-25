import React, { Component, Fragment } from "react";
class LifeCyclesMethods extends Component {
  constructor() {
    super();
    this.state = { city: "Bangalore" };
    console.log("Calling constructor....1"); //first calling
  }

  static getDerivedStateFromProps(state, props) {
    // console.log("call  static getDerivedStateFromProps...2", state, props); // second call
  }
  componentDidMount() {
    console.log("calling component did mount....4"); //did mount
  }
  changeCity = () => {
    this.setState({ city: "Hydearbad" });
  };
  shouldComponentUpdate(preveProps, preveState) {
    // console.log(preveState);
    if (preveState.city === this.state.city) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    console.log("updating faceee....");
  }
  render() {
    console.log("calling render...333"); // render call..
    return (
      <>
        <h1>LifeCyclesMethods</h1>
        <h2>{this.state.city}</h2>

        <button onClick={this.changeCity}>changeCity</button>
      </>
    );
  }
}

export default LifeCyclesMethods;
