import React, { Component } from "react";
import "./continer.css";

class Continer extends Component {
  render() {
    const name = "Ram";
    const age = 25;
    const obj = {
      name: "Ram",
      age: 22,
      city: "Banglore",
      gender: "Male",
      email: "ram@gmail.com",
      phone: 8394294338,
    };
    return (
      <div>
        <div className="page-continer">
          <h1>Continer....</h1>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>
            <table className="tbl">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{obj.name}</td>
                  <td>{obj.city}</td>
                  <td>{obj.age}</td>
                  <td>{obj.gender}</td>
                  <td>{obj.email}</td>
                  <td>{obj.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Continer;
