import React, { Component } from 'react';
import '../styles/about.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';
import Toggle from './Toggle';
import Social from './Social';
import Text from './Text';
import Picture from './Picture';
import Butt from './Butt';
import StatsWordsCV from './StatsWordsCV';
import StatsArticles from './StatsArticles';
import StatsClients from './StatsClients';
import StatsExp from './StatsExp';

class About extends Component {
    render() {
        return (
            <Router>
                <div className='rama'>
                    <div className='container'>
                        <div className="grid">
                            <div className="grid-item grid-item-1">
                                {<Toggle />}
                            </div>
                            <div className="grid-item grid-item-2">
                                {<Text />}
                            </div>
                            <div className="grid-item experience">
                                {<StatsExp />}
                            </div>
                            <div className="grid-item clients">
                                {<StatsClients />}
                            </div>
                            <div className="grid-item articles">
                                {<StatsArticles />}
                            </div>
                            <div className="grid-item words">
                                {<StatsWordsCV />}
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
                </div>
            </Router >
        );
    }
}

export default About;
