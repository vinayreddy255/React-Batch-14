import { Component } from "react";
import HocCounter from "./HocCounter";
class BtnCounter extends Component {
  render() {
    return (
      <div className="btn-counter">
        <h1>Button Counter Component</h1>
        <h2>Btn Counter Value:{this.props.countValue}</h2>
        <button onClick={this.props.inCrmentCounter}>inCrmentCounter</button>
        <button onClick={this.props.decrementCounter}>decrementCounter</button>
      </div>
    );
  }
}

export default HocCounter(BtnCounter, 5);
