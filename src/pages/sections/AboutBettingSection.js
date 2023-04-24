import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Carousel from "components/Carousel.js";

function AboutBettingSection() {
    const items = [
        {
            src: require("assets/img/carousel1.jpg"),
            altText: "Cuidando os Animais",
            caption: "Cuidando os Animais",
        },
        {
            src: require("assets/img/carousel2.jpg"),
            altText: "Pensando no Planeta",
            caption: "Pensando no Planeta",
        },
        {
            src: require("assets/img/carousel3.jpg"),
            altText: "Contribuindo na Sociedade",
            caption: "Contribuindo na Sociedade",
        },
    ];

    return (
        <>
            <div className="site-section bg-light">
                <Container className="p-5">
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Apostando na terra</h2>
                        </Col>
                    </Row>
                    <Carousel items={items} />
                </Container>
            </div>
        </>
    );
}

export default AboutBettingSection;