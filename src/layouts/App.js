import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import CV from "./CV";
import Contact from "./Contact";
import Test from "./Test";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/o-mnie" exact component={About} />
          <Route path="/test" exact component={Test} />
          <Route path="/cv" exact component={CV} />
          <Route path="/kontakt" exact component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
