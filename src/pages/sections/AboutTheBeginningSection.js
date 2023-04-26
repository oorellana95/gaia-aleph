import React from 'react';
import { Container, Row, Col } from "reactstrap";

function TheBeginningSection() {
    return (
        <>
            <div className="TheBeginning-section site-section first">
                <Container>
                    <Row>
                        <Col lg={12} xl={12}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Nosso inicio</span>
                                    <h3>Empresa com cultura Gaia</h3>
                                </div>
                                <p>A Gaia prioriza a sustentabilidade, a responsabilidade e os relacionamentos com produtores parceiros como pilares da empresa. Nosso objetivo é simultaneamente defender o meio ambiente e impulsionar os produtores rurais, beneficiando o país como um todo. Ademais, acreditamos ser crucial garantir o bem-estar dos animais, e portanto realizamos testes rigorosos para assegurar sua qualidade de vida.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TheBeginningSection;
