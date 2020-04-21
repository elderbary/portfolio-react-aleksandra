import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';
import Toggle from './Toggle';
import Social from './Social';
import Text from './Text';
import Picture from './Picture';
import Butt from './Butt';
import Stats from './Stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, ListGroupItem } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className="grid">
            <div className="grid-item grid-item-1">
              {<Toggle />}
            </div>
            <div className="grid-item grid-item-2">
              {<Text />}
              {<Stats />}
            </div>
            <div className="grid-item grid-item-3">
              {<Picture />}
              {<Social />}
            </div>
            <div className="grid-item grid-item-5">
              {<Navigation />}
            </div>
            <div className="grid-item grid-item-6">
              {<Butt />}
            </div>
          </div>
        </div>

      </Router >
    );
  }
}

export default App;
