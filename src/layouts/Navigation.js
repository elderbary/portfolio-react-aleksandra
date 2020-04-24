import React from 'react';
import '../styles/nav.css';
import { NavLink } from 'react-router-dom';
import App from './App';
import About from './About';
import CV from './CV';
import Contact from './Contact';

const list = [
    { name: "portfolio", path: "/" },
    { name: "o mnie", path: "./About" },
    { name: "moje cv", path: "./CV" },
    { name: "kontakt", path: "./Contact" },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    )
}
export default Navigation;
