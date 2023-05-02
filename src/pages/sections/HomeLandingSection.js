import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Card from 'components/Card';

function HomeLandingSection() {

    const items = [
        {
            name: 'Entre em contato com nossa equipe',
            description: 'A equipe se encarregará de informar, treinar a equipe, equipar o gado com máscaras, instalar a plataforma em seus dispositivos e fornecer tudo o que você precisa para realizar a atividade.',
            number: 1
        },
        {
            name: 'Os bovinos usam o seu novo kit',
            description: 'Os animais desenvolvem sua vida normal com as máscaras. Estas transformam metano em CO2 e o fazendeiro ganha créditos de carbono, ao mesmo tempo que há um maior controle sobre a saúde do bovino.',
            number: 2
        },
        {
            name: 'Gana dinheiro com a plataforma',
            description: 'Os dados dos bovinos e os créditos de carbono são registrados e exibidos na plataforma. A partir daqui, o agricultor pode consultar os dados dos animais e trocar créditos por dinheiro real, aumentando seu lucro.',
            number: 3
        }]

    return (
        <>
            <div className="site-section first">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Como funciona?</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {items.map((item, index) => {
                            return (
                                <Card key={index} removeBorderBoxes={true} name={item.name} description={item.description} number={item.number} />
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeLandingSection;