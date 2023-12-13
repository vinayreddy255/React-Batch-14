import React, { Component } from "react";

class EventsAndState extends Component {
  constructor() {
    super();
    this.state = { city: "Bangalore", age: 23 };
    this.changeCityName = this.changeCityName.bind(this);
  }

  changeCityName() {
    // this.state.city = "Hyderbad";
    const newState = { ...this.state };
    newState.city = "Hyderbad";
    // console.log("old state....!", this.state);
    // console.log("newState....!", newState);
    this.setState(newState);
  }
  render() {
    console.log(this.state);
    const { city, age } = this.state;
    return (
      <div>
        <h2>Events And State</h2>
        <h3>City:{city}</h3>
        <button onClick={this.changeCityName}>ChangeName</button>
      </div>
    );
  }
}
export default EventsAndState;
