import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Toggle from "../Components/Toggle";
import Btn from "../Components/Btn";
import Statistics from "../Components/Statistics";
import Text from "../Components/Text";
import Picture from "../Components/Picture";
import Social from "../Components/Social";

import pc from '../images/pc.svg';
import HomeItem from "../Components/HomeItem";
import Item from '../Components/Item';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
];

class Home extends Component {
    handleScroll = (event) => {
        if (event.deltaY < 0)
        {
            console.log('scrolling up');
            this.carousel.slidePrev();
            window.removeEventListener('wheel', this.handleScroll);
            setTimeout(this.enableScroll,800);
        }
        else if (event.deltaY > 0)
        {
            console.log('scrolling down');
            this.carousel.slideNext();
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
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-toogle" md={1}>{<Toggle />}</Col>
                        <Col className="col-std col-inner" md={10}>
                            <Carousel itemsToShow={1} itemsToScroll={1} enableSwipe={true} verticalMode={true} showArrows={false} pagination={false} ref={ref => (this.carousel = ref)}>
                                <Item>1</Item>
                                <Item>2</Item>
                                <Item>3</Item>
                            </Carousel>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn" md={{ span: 4, offset: 4}}><Btn btntext="Zobacz więcej" /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
