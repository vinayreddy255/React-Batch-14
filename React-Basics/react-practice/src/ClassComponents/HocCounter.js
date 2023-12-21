import { Component } from "react";

function HocCounter(MyComponent, value = 1) {
  return class MyHoc extends Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
    inCrmentCounter = () => {
      this.setState({ count: this.state.count + value });
    };
    decrementCounter = () => {
      this.setState({ count: this.state.count - value });
    };
    render() {
      return (
        <MyComponent
          inCrmentCounter={this.inCrmentCounter}
          decrementCounter={this.decrementCounter}
          countValue={this.state.count}
        />
      );
    }
  };
}
export default HocCounter;
