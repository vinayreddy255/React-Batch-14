import { Component } from "react";
import HocCounter from "./HocCounter";

class HoverCounterCompoent extends Component {
  render() {
    return (
      <div className="hover-counter">
        <h1>---Hover Counter Component---</h1>
        <h2>hover Counter Value:{this.props.countValue}</h2>
        <button onMouseOver={this.props.inCrmentCounter}>
          inCrmentCounter
        </button>
        <button onMouseOver={this.props.decrementCounter}>
          decrementCounter
        </button>
      </div>
    );
  }
}

export default HocCounter(HoverCounterCompoent);
