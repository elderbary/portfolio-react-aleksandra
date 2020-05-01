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
import Statistics from "./Statistics";

class Test extends Component {
    render() {
        return (
            <Container className="container-std">
                <Row className="row-main">
                    <Col className="col-std col-toogle" md={1}>{<Toggle />}</Col>
                    <Col className="col-std col-left" md={5}>
                        <Container className="container-left">
                            <Row className="row-text">
                                <Col className="col-std col-text" md={12}>Test</Col>
                            </Row>
                            <Row className="row-stats">
                                <Col className="col-std col-stats"><Statistics score="Test" description ="Test"/></Col>
                                <Col className="col-std col-stats"><Statistics score="Test" description ="Test"/></Col>
                                <Col className="col-std col-stats"><Statistics score="Test" description ="Test"/></Col>
                                <Col className="col-std col-stats"><Statistics score="Test" description ="Test"/></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="col-std col-right" md={5}>Prawo</Col>
                    <Col className="col-std col-nav" md={1}>{<Navigation />}</Col>
                </Row>
                <Row className="row-bottom">
                    <Col className="col-std col-btn" md={{ span: 2, offset: 5}}>{<Butt />}</Col>
                </Row>
            </Container>
        );
    }
}

export default Test;