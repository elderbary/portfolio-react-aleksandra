import React, { Component, ReactDOM } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import Toggle from "./Toggle";
import Social from "./Social";
import Text from "./Text";
import Picture from "./Picture";
import StatsView from "./StatsView";
import StatsWords from "./StatsWords";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="grid-item grid-item-1">{<Toggle />}</div>
          <div className="grid-item grid-item-2">{<Text />}</div>
          <div className="grid-item grid-item-stats-1">
            {<StatsWords upperTextOne="3,543" bottomTextOne="słów" />}
          </div>

          <div className="grid-item grid-item-stats-2">
            {<StatsView upperTextTwo="13,543" bottomTextTwo="wyświetleń" />}
          </div>
          <div className="grid-item grid-item-3">
            {<Picture />}
            {<Social />}
          </div>
          <div className="grid-item grid-item-5">{<Navigation />}</div>
        </div>
      </div>
    );
  }
}

export default Home;
