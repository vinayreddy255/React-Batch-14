import { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  constructor() {
    super();
    this.state = { count: 0, list: [] };
    this.incremnt = this.incremnt.bind(this);
    this.decrment = this.decrment.bind(this);
    // this.reciveChilData = this.reciveChilData.bind(this);
  }
  incremnt() {
    this.setState({ ...this.state, count: this.state.count + 1 });
  }
  decrment() {
    if (this.state.count > 0)
      this.setState({ ...this.state, count: this.state.count - 1 });
  }
  reciveChilData = (list, city) => {
    // console.log("perent...", list, city);
    this.setState({ ...this.state, city: city, list: list });
  };
  render() {
    const personObj = { name: "Ram", age: 25, city: "Bangalore" };
    console.log(this.state);
    return (
      <div>
        <h2>Parent Compoent</h2>
        <h2>Recive city from child and city is:{this.state.city}</h2>
        {this.state.list.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
        {/* {this.state.list.map((e) => {
          return <li>{e}</li>;
        })} */}
        <h2>Useing normal functions....</h2>
        {this.state.list.map(function (items, index) {
          return <li key={index}>{items}</li>;
        })}
        <button onClick={this.incremnt}>CounterInc</button>
        <button onClick={this.decrment}>CounterDec</button>
        <Child
          person={personObj}
          counter={this.state.count}
          reciveChilData={this.reciveChilData}
        />
      </div>
    );
  }
}
export default Parent;
