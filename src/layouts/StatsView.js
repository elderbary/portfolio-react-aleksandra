import React, { Component } from "react";
import "../styles/stats.css";

class Stats extends Component {
  render() {
    return (
      <div className="flex-container-StatsExp">
        <h2>{this.props.upperTextTwo}</h2>
        <p>{this.props.bottomTextTwo}</p>
      </div>
    );
  }
}

export default Stats;
