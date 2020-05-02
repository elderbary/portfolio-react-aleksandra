import React, { Component } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
import Toggle from "./Toggle";


class CV extends Component {
  render() {
    return (
      <div className="rama">
        <div className="container">
          <div className="grid">
            <div className="grid-item grid-item-1">{<Toggle />}</div>
            <div className="grid-item grid-item-5">{<Navigation />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
