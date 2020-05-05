import React, {Component} from 'react';
import '../styles/btn.css';

class Btn extends Component {
    render () {
    return (
        <div className="btn-container">
            <button type="button" className="button"><a href={this.props.href}>{this.props.btntext}</a></button>
        </div>
    )
}
}

export default Btn; 