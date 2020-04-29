import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Toggle from "./Toggle";
import Text from "./Text";

class Contact extends Component {
  render() {
    return (
      <div className="rama">
        <div className="container">
          <div className="grid">
            <div className="grid-item grid-item-1">{<Toggle />}</div>
            <div className="grid-item grid-item-2">{<Text />}</div>
            <div className="grid-item grid-item-3"></div>
            <div className="grid-item grid-item-5">{<Navigation />}</div>
            <div className="grid-item grid-item-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
