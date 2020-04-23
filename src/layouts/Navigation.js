import React from 'react';
import '../styles/nav.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import App from './App';
import About from './About';
import CV from './CV';
import Contact from './Contact';


const Navigation = () => {
    <Router>
        <div>
            <ul>
                <li><NavLink to="/" exact activeStyle={{ color: 'black' }}>PORTFOLIO</Navlink></li>;
                <li><NavLink to="/about" exact activeStyle={{ color: 'black' }}>O MNIE</Navlink></li>;
                <li><NavLink to="/cv" exact activeStyle={{ color: 'black' }}>MOJE CV</Navlink></li>;
                <li><NavLink to="/contact" exact activeStyle={{ color: 'black' }}>KONTAKT</Navlink></li>;
            </ul>

            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/contact" component={Contact} />
        </div>
    </Router>
}
ReactDOM.render(routing, document.getElementById('root'));


https://www.javatpoint.com/react-router
