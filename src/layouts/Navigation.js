import React from 'react';
import '../styles/nav.css';
import { NavLink } from 'react-router-dom';

const list = [
    { name: "portfolio", path: "/" },
    { name: "o mnie", path: "/" },
    { name: "moje cv", path: "/" },
    { name: "kontakt", path: "/" },
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