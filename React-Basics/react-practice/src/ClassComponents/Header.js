import React, { Component } from "react";
import "./style.css";
// class Header extends React.Component{
class Header extends Component {
  render() {
    return (
      <div className="header-compoent">
        <div className="header-continer">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
