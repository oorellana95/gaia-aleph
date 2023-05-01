
import React, { useState } from 'react'
import ItemContact from 'components/ItemContact';
import { Container, Row, Col} from "reactstrap";
import { faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function GetInTouchSection() {

    const itemsContact = [
        {
            name: 'GAIA ALEPH, Rio de Janeiro.',
            description: 'Edifício Luiz Simões Lopes, Praia de Botafogo, 190 - 11º Andar - Botafogo, 22250-900',
            icon: faBuilding
        },
        {
            name: "coelhorafael8@gmail.com",
            description: 'Envie-nos sua consulta a qualquer momento!',
            icon: faEnvelope
        },
        {
            name: '(21) 97501-6000',
            description: 'Segunda a Sexta 8am até 8pm',
            icon: faPhone
        }
    ]

    return (
        <>
            <div className="site-section bg-light">
                <Container>
                    <Row>
                        <Col md={6} className="section-heading">
                            <h3 className="mb-5 font-weight-bold">Entre em contato</h3>
                        </Col>
                    </Row>
                    <Row>
                        {itemsContact.map(item => {
                            return (
                            <Col lg={4} className="mt-3" >
                                <ItemContact name={item.name} description={item.description} icon={item.icon} />
                            </Col>)
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default GetInTouchSection;