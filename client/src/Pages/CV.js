import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Toggle from "../Components/Toggle";
import Btn from "../Components/Btn";
import Social from "../Components/Social";
import Timeline from "../Components/Timeline";

import English from "../Components/English";
import Office from "../Components/Office";
import Adobe from "../Components/Adobe";
import Norway from "../Components/Norway";


class Test extends Component {
    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-toogle" md={1}>{<Toggle />}</Col>
                        <Col className="col-std col-center" md={10}>
                            <div className="div-center">
                            <Row className="row-stats">
                                        <Col className="col-std col-stats">{<English />}</Col>
                                        <Col className="col-std col-stats">{<Office />}</Col>
                                        <Col className="col-std col-stats">{<Adobe />}</Col>
                                        <Col className="col-std col-stats">{<Norway />}</Col>
                                    </Row>
                                    <Row className="row-cv">
                                      {<Timeline />}
                                    </Row>
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn" md={{ span: 4, offset: 4}}><Btn btntext="Pobierz CV" /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Test;
