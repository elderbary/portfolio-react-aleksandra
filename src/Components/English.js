import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/english.css';

const English = () => {
    return (
        <div className="english-container">
        <h2>Język angielski</h2>
        <div className="progress-container">
        <li><div className="progress-english"></div></li>
        <li> <div className="progress-english"></div></li>
        <li><div className="progress-english"></div></li>
        <li> <div className="progress-english"></div></li>
        <li> <div className="progress-english-null"></div></li>
        </div>
        </div>
    )
}

export default English; 