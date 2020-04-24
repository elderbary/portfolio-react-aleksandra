import React from 'react';
import '../styles/nav.css';
import { NavLink } from 'react-router-dom';
import App from './App';
import About from './About';
import CV from './CV';
import Contact from './Contact';


const list = [
    { name: "portfolio", path: "/", exact: true },
    { name: "o mnie", path: "/o-mnie" },
    { name: "moje cv", path: "/cv" },
    { name: "kontakt", path: "/kontakt" },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li >
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    )
}



/** 
const Navigation = () => {

    return (
        <div className="main">
            <ul>
                <li>
                    <NavLink to="/">PORTFOLIO</NavLink>
                </li>
                <li>
                    <NavLink to="/o-mnie">O MNIE</NavLink>
                </li>
                <li>
                    <NavLink to="/cv">MOJE CV</NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt">KONTAKT</NavLink>
                </li>
            </ul>
        </div>
    )
}
*/
export default Navigation;