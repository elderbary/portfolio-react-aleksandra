import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/stats.css';

class Stats extends Component {

    render() {
        return (
            <div className="flex-container-StatsExp">
                <h2>{this.props.upperText}
                </h2>
                <p>
                    {this.props.bottomText}
                </p>
            </div>
        );
    }
}

export default Stats;