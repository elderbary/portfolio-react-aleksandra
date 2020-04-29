import React, { Component } from "react";
import "../styles/stats.css";

class Stats extends Component {
  render() {
    return (
      <div className="flex-container-StatsExp">
        <h2>{this.props.upperTextOne}</h2>
        <p>{this.props.bottomTextOne}</p>
      </div>
    );
  }
}

export default Stats;
