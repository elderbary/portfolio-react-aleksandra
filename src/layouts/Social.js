import React from 'react';
import '../styles/social.css';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

const Social = () => {
    return (
        <div className="socialpic">
            <ul>
                <li>
                    <img src={facebook} alt="facebook" />
                </li>
                <li>
                    <img src={twitter} alt="twitter" />
                </li>
                <li>
                    <img src={instagram} alt="instagram" />
                </li>
            </ul>
        </div>
    )
}

export default Social; 