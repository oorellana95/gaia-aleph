import React from 'react';
import { Container, Row, Col } from "reactstrap";

function AboutFgvSection() {
    return (
        <>
            <div className="Fgv-section site-section bg-light">
                <Container>
                    <Row>
                        <Col lg={6} xl={6}>
                            <div className="about-thumb d-flex">
                                <div className="img">
                                    <img
                                        alt="..."
                                        className="n-logo img-raised"
                                        src={require("assets/img/fgv-logo.jpg")}
                                    ></img>
                                </div>
                                <div className="img_2">
                                    <img
                                        alt="..."
                                        className="n-logo img-raised"
                                        src={require("assets/img/fgv-building.jpg")}
                                    ></img>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xl={6}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>FGV EPGE</span>
                                    <h3>Da teoria à prática</h3>
                                </div>
                                <p> Gaia Aleph foi criada usando práticas ágeis no campo da criação de startups. O projeto vem sendo realizado por meio dos ensinamentos e acompanhamento de Layla dos Santos Mendes, professora da FGV EPGE com experiência na área de empreendedorismo e doutorado em Administração de Empresas.</p>
                                <p> Por outro lado, o processo de criação e desenvolvimento da start-up foi realizado por meio da criação de um CANVAS, do desenvolvimento de hipóteses e da implementação dessas hipóteses.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row >
                        <div className="info">
                            <div className="section-title mb-20px mt-5">
                                <h3>Referências da metodologia</h3>
                            </div>
                            <p>Essas prácticas de craçao de empresas podem ser encontradas nos três livros a seguir:</p>
                            <ol>
                                <li>Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers (Alexander Osterwalder, Yves Pigneur)</li>
                                <li>The Lean Startup (Eric Ries)</li>
                                <li>The Startup Owner's Manual: The Step-by-Step Guide for Building a Great Company (Steve Blank)</li>
                            </ol>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AboutFgvSection;
