import React, { Component } from "react";
import ReactDom from "react-dom";

class AppContainer extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

const wrapper = document.getElementById("counter-app-container");
wrapper ? ReactDom.render(<AppContainer />, wrapper) : false;
