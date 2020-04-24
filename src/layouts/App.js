import React, { Component } from 'react';
import '../styles/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import CV from './CV';
import Contact from './Contact';

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
      </Router >

    );
  }
}


export default App;
