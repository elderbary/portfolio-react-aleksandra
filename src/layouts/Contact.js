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

class Contact extends Component {
  render() {
    return (
      <Router>
        <div className="rama">
          <div className="container">
            <div className="grid">
              <div className="grid-item grid-item-1">{<Toggle />}</div>
              <div className="grid-item grid-item-2">{<Text />}</div>
              <div className="grid-item grid-item-stats-1"></div>
              <div className="grid-item grid-item-stats-2"></div>
              <div className="grid-item grid-item-3">{<Social />}</div>
              <div className="grid-item grid-item-5">{<Navigation />}</div>
              <div className="grid-item grid-item-6"></div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Contact;
