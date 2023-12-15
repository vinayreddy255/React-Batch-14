import React, { Component } from "react";
import "./CondationalRender.css";
class CondationalRender extends Component {
  constructor() {
    super();
    this.state = { showHide: true, text: "Hide Circle" };
  }
  /* showCircle = () => {
    this.setState({ ...this.statem, showHide: true });
  };
  hideCircle = () => {
    this.setState({ ...this.statem, showHide: false });
  }; */
  showHideCircle = () => {
    const state = { ...this.state };
    if (state.showHide) {
      state.showHide = false;
      state.text = "Show circle";
    } else {
      state.showHide = true;
      state.text = "Hide circle";
    }
    this.setState(state);
    // this.setState({
    //   ...this.state,
    //   showHide: !this.state.showHide,
    //   text: this.state.showHide ? "Hide circle" : "Show circle",
    // });
  };
  render() {
    return (
      <div>
        <h1>Condational Render</h1>
        {/* {this.state.showHide && <div className="circle"></div>}
        {!this.state.showHide && <h2>Circel is hidding...</h2>} */}

        {this.state.showHide ? (
          <div className="circle"></div>
        ) : (
          <h1>Hideing the circle...</h1>
        )}

        {/* <button onClick={this.showCircle} disabled={this.state.showHide}>
          Show Circle
        </button>
        <button onClick={this.hideCircle} disabled={!this.state.showHide}>
          Hide Circle
        </button> */}
        <button onClick={this.showHideCircle}>{this.state.text}</button>
      </div>
    );
  }
}
export default CondationalRender;
