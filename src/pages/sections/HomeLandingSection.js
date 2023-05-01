import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Card from 'components/Card';
import { Link } from 'react-router-dom';

function HomeLandingSection() {

    const items = [
        {
            name: 'Melhore o bem-estar animal',
            description: 'Tenha um melhor monitoramento da condição do seu gado.',
        },
        {
            name: 'Reduza as emissões de metano',
            description: 'Faça um impacto muito positivo para o planeta combatendo o efeito estufa.',
        },
        {
            name: 'Ganhe créditos de carbono',
            description: 'Gera e vende créditos no mercado de carbono.',
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
                        {items.forEach((item, index) => {
                            return (
                                <Card key={index} name={item.name} description={item.description} />
                            )
                        })}
                    </Row>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <Link to={"/technology"}>
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