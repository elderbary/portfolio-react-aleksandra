import React from 'react';
import '../styles/picture.css';
import pc from '../images/pc.png';
const Picture = () => {
    return (
        <div className="picture">
            <img src={pc} alt="pc" />
        </div>
    );
}

export default Picture; 