import React, {Component} from 'react';
import '../styles/btn.css';

class Btn extends Component {
    render () {
    return (
        <div className="btn-container">
            <button className="button" type="button">{this.props.btntext}</button>
        </div>
    )
}
}

export default Btn; 