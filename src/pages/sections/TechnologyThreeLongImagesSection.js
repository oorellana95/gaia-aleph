import React from 'react';
import { Container, Row, Col } from "reactstrap";

function ThreeLongImagesSection() {
    return (
        <>
            <div className="ThreeLongImages-section site-section bg-light">
                <Container>
                    <Row>
                        <Col lg={12} xl={12}>
                            <div className="about-thumb d-flex">
                                <div className="img_2">
                                    <img
                                        alt="..."
                                        className="n-logo img-raised"
                                        src={require("assets/img/cow-mask0.jpg")}
                                    ></img>
                                </div>
                                <div className="img_1">
                                    <img
                                        alt="..."
                                        className="n-logo img-raised"
                                        src={require("assets/img/cow-mask1.png")}
                                    ></img>
                                </div>
                                <div className="img_2">
                                    <img
                                        alt="..."
                                        className="n-logo img-raised"
                                        src={require("assets/img/cow-mask2.png")}
                                    ></img>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ThreeLongImagesSection;
