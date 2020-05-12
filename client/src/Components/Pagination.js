import React, {Component} from 'react';
import '../styles/pagination.css';

class Pagination extends Component {
    pagination = "";
    paginationPosition = 1;
    handleScroll = (event) => {
        if (event.deltaY < 0)
        {
            this.paginationPosition=this.paginationPosition-1;
            // document.getElementById('pagination').innerHTML=this.paginationPosition.toString();
            window.removeEventListener('wheel', this.handleScroll);
            setTimeout(this.enableScroll,800);
        }
        else if (event.deltaY > 0)
        {
            this.paginationPosition=this.paginationPosition+1;
            // document.getElementById('pagination').innerHTML=this.paginationPosition.toString();
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

    constructor(props) {
        super(props);
        for (var i = 1; i <= props.itemsCount; i++)
        {
            this.pagination += '<div class="pagination-square" id="square-'+i+'"></div>';
        }
    }

    render() {
        return(
            <div dangerouslySetInnerHTML={{ __html: this.pagination }}></div>
        );
    }
}

export default Pagination;