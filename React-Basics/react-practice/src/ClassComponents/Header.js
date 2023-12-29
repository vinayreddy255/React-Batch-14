import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// class Header extends React.Component{
class Header extends Component {
  render() {
    return (
      <div className="header-compoent">
        <div className="header-continer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Product">Prodcut</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
