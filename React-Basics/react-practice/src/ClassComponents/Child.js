import { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    this.sendDataToParent = this.sendDataToParent.bind(this);
    this.cityList = ["Hyderbad", "Bangalore", "Pune", "Chennai"];
  }

  sendDataToParent() {
    // console.log(this.cityList);
    this.props.reciveChilData(this.cityList, "Bangalore");
  }
  render() {
    // console.log("child Compoent....!", this.props);
    const { person } = this.props;
    return (
      <div>
        <h1>Child Compoent</h1>
        <h2>Counter:{this.props.counter}</h2>
        <h3>Name:{person.name}</h3>
        <h3>City:{person.city}</h3>
        <h3>Age:{this.props.person.age}</h3>
        <button onClick={this.sendDataToParent}>sendDataToParent</button>
      </div>
    );
  }
}
export default Child;
