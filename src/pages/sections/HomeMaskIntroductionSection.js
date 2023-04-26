import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

function MaskIntroductionSection() {
    return (
        <>
            <div className="MaskIntroduction-section site-section first">
                <Container>
                    <Row>
                        <Col lg={5} xl={5}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Máscara e plataforma</span>
                                    <h3>Mais um passo transformando nossas fazendas e mundo</h3>
                                </div>
                                <p>O nosso dispositivo converte o metano liberado pelo gado em dióxido de carbono e água, reduzindo o impacto da pecuária no clima. É um equipamento confortável e seguro, gerador de créditos de carbono que podem ser vendidos no mercado e portanto elevam a lucratividade do setor.</p>
                                <p>Nossa plataforma permite monitorar o status de cada máscara e acessar o mercado de carbono, onde você será pago generosamente por ter contribuído para o combate ao aquecimento global. O retorno anual de investir em nosso produto é de cerca de 300%.</p>
                                <Link to={"/technology"}><span className="line-button">Saiba Mais</span></Link>
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
