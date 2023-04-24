import React from 'react';
import { Container, Row, Col } from "reactstrap";

function MaskIntroductionSection() {
    return (
        <>
            <div className="MaskIntroduction-section site-section first">
                <Container>
                    <Row>
                        <Col lg={5} xl={5}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Aparelho facial bovino</span>
                                    <h3>Mais um passo transformando nossas fazendas e mundo</h3>
                                </div>
                                <p>Aparelho facial bovino para converter metano em dióxido de carbono e água, reduzindo o efeito estufa resultante. É um equipamento confortável e seguro que contribui positivamente para a atividade pecuária, pois além de realizar a conversão e ganhar créditos de carbono, também permite obter dados relacionados à saúde e localização do animal.</p>
                                <a href="https://www.seat.es/" rel="noopener noreferrer" target="_blank" className="line-button">Saiba Mais</a>
                            </div>
                        </Col>
                        <Col lg={7} xl={7}>
                            <div className="about-thumb d-flex">
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

export default MaskIntroductionSection;
