import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CV from "./CV";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/o-mnie" exact component={About} />
          <Route path="/cv" exact component={CV} />
          <Route path="/kontakt" exact component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
