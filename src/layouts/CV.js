import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Toggle from "./Toggle";
import Social from "./Social";
import Text from "./Text";
import Picture from "./Picture";
import Butt from "./Butt";
import StatsWords from "./StatsWords";
import StatsView from "./StatsView";

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
