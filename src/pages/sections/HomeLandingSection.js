import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Card from 'components/Card';
import { Link } from 'react-router-dom';

function HomeLandingSection() {

    const items = [
        {
            name: 'Melhore o bem-estar animal',
            description: 'Tenha um melhor monitoramento da condição dos seus bovinos.',
        },
        {
            name: 'Reduza as emissões de methano',
            description: 'Faça um impacto muito positivo para o planeta combatendo o efeito estufa.',
        },
        {
            name: 'Ganhe créditos de carbono',
            description: 'Gera créditos e vendendo-os no mercado de créditos de carbono.',
        }]

    return (
        <>
            <div className="site-section first bg-light">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Se você é um fazendeiro</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {items.map(item => {
                            return (
                                <Card name={item.name} description={item.description} />
                            )
                        })}
                    </Row>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <Link to={"/farmers"}>
                                <span className="line-button">Saiba Mais</span>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeLandingSection;