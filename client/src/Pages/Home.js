import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Pagination from "../Components/Pagination";
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
    carouselItems = [
        {
          id: 1,
          title: "test",
          description: "test",
          imagePath: "",
          chars: 1234,
          views: 4321
        },
        {
            id: 2,
            title: "test2",
            description: "test2",
            imagePath: "",
            chars: 1234,
            views: 4321
        },
    ]

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
                        <Col className="col-std col-toggle" md={1}>
                            <div className="div-toggle">
                                <div className="div-inner-toggle">
                                    {<Pagination itemsCount = {this.carouselItems.length} />}
                                </div>
                            </div>
                        </Col>
                        <Col className="col-std col-left" md={5}>
                            <div className="div-left">
                                <Container className="container-left">
                                <Carousel itemsToShow={1} itemsToScroll={1} enableSwipe={true} verticalMode={true} showArrows={false} pagination={false} ref={ref => (this.carousel = ref)}>
                                    <Item> <Col className="col-std col-text"><Text title="Cześć, jestem Ola" text ="Mam 26 lat a środowisko, które mnie otacza, stanowią puste kubki po herbacie oraz sterty (nie)przeczytanych książek, od ciężaru których uginają się już półki. Piszę o książkach i serialach od 6 lat, od momentu w którym stwierdziłam, że to już czas. Czytam kryminały (szwedzkie), reportaże (wydawnictwa Czarnego) oraz obyczajówki (ciekawe). "/></Col> </Item>
                                    <Item></Item>
                                </Carousel>
<Row className="row-text">
                                       
                                    </Row>
                                    <Carousel itemsToShow={1} itemsToScroll={1} enableSwipe={true} verticalMode={true} showArrows={false} pagination={false} ref={ref => (this.carousel = ref)}>
    <Item> <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="5 lat" description ="doświadczenia"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="42" description ="klientów"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="215" description ="artykułów"/></Col>
                                        <Col className="col-std col-stats"><Statistics score="53,345" description ="słów"/></Col>
                                    </Row></Item>
                                    <Item></Item>
</Carousel>
                                    
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={5}>
                            <div className="div-right">
                            {<Picture />}
                            </div>
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

