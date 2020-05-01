import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./Navigation";
import Toggle from "./Toggle";
import Social from "./Social";
import Text from "./Text";
import Picture from "./Picture";
import Butt from "./Butt";
import StatsWordsCV from "./StatsWordsCV";
import StatsArticles from "./StatsArticles";
import StatsClients from "./StatsClients";
import StatsExp from "./StatsExp";

class Test extends Component {
    render() {
        return (
            <Container className="container-std">
                <Row className="row-main">
                    <Col className="col-std col-toogle" md={1}>Toggle</Col>
                    <Col className="col-std col-left" md={5}>Lewo</Col>
                    <Col className="col-std col-right" md={5}>Prawo</Col>
                    <Col className="col-std col-menu" md={1}>Menu</Col>
                </Row>
                <Row className="row-bottom">
                    <Col className="col-std col-more" md={{ span: 2, offset: 5}}>See more</Col>
                </Row>
            </Container>
        );
    }
}

export default Test;
