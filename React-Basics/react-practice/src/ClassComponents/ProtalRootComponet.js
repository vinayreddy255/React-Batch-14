import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class ProtalRootComponet extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="protals-comeponet">
        <h1>ProtalRootComponet</h1>
      </div>,
      document.getElementById("protalRoot")
    );
  }
}
export default ProtalRootComponet;
