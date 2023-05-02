import React from 'react';
import { Container, Row, Col } from "reactstrap";

function HomeCommingSoonSection() {
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
                                        src={require("assets/img/em-breve.png")}
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
                        <Col lg={6} xl={6}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Trabalhando para você</span>
                                    <h3>Impactando o mundo e nossas fazendas</h3>
                                </div>
                                <p> Nossa equipe está desenvolvendo máscaras bovinas para garantir o bem-estar animal e contribuir positivamente com o planeta diminuindo o impacto no efeito estufa.</p>
                                <p> Além disso, queremos contribuir e promover a economia sustentável do nosso país. Queremos aumentar os lucros de nossos parceiros fazendeiros e ajudar as empresas do setor agropecuário a atingirem seus objetivos com práticas verdes.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeCommingSoonSection;
