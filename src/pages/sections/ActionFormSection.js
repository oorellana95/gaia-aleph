import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

function ActionFormSection() {
    return (
        <>
            <div className="ActionForm-section site-section first">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Torne-se um parceiro</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} xl={6}>
                            <div className="info">
                                <p>Você tem a oportunidade de se tornar um dos nossos primeiros parceiros e receber uma versão exclusiva do nosso produto de forma promocional completando o formulário do próximo link.</p>
                                <p>Esse questionário leva em média 5 minutos.</p>
                            </div>
                        </Col>
                        <Col lg={6} xl={6} className="my-auto mx-auto">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqFg62bWBCeo2Vdj1zwJynnf5LAQt0YR83iy-eR58vn6IYmQ/viewform" type="button" target="_blank" className="form-boxed-btn">
                                <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                <span>Formulário</span>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ActionFormSection;
