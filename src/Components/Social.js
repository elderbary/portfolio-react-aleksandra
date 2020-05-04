import React from 'react';
import '../styles/social.css';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';

const Social = () => {
    return (
        <div className="social">
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