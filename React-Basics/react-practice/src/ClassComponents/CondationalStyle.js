import React, { Component } from "react";

class CondationalStyle extends Component {
  constructor() {
    super();
    this.state = { list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  }
  render() {
    return (
      <div>
        <h2>CondationalStyle</h2>
        {this.state.list.map((e) => (
          <li
            key={e}
            style={{
              backgroundColor:
                e > 4 && e < 6 ? "green" : e >= 6 && e < 8 ? "orange" : "blue",
              color: e > 4 ? "white" : "red",
              fontSize: e > 4 ? "white" : "red",
            }}
          >
            {e}
          </li>
        ))}
      </div>
    );
  }
}

export default CondationalStyle;
