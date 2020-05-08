import React, {Component} from 'react';

class Toggle extends Component {
    paginationPosition = 1;
    handleScroll = (event) => {
        if (event.deltaY < 0)
        {
            this.paginationPosition=this.paginationPosition-1;
            document.getElementById('pagination').innerHTML=this.paginationPosition.toString();
            window.removeEventListener('wheel', this.handleScroll);
            setTimeout(this.enableScroll,800);
        }
        else if (event.deltaY > 0)
        {
            this.paginationPosition=this.paginationPosition+1;
            document.getElementById('pagination').innerHTML=this.paginationPosition.toString();
            window.removeEventListener('wheel', this.handleScroll);
            setTimeout(this.enableScroll,800);
        }
    }
    enableScroll = () => {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        return(
            <span id="pagination">1</span>
        );
    }
}

export default Toggle; 