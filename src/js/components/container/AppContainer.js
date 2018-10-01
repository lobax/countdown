import React, { Component } from "react";
import ReactDom from "react-dom";
import CountDown from './../presentational/countDown';

class AppContainer extends Component {
  render() {
    return (
      <CountDown
      />
    );
  }
}

const wrapper = document.getElementById("counter-app-container");
wrapper ? ReactDom.render(<AppContainer />, wrapper) : false;
