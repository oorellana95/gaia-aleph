
import React from 'react'
import Map from 'components/Map';
import ItemContact from 'components/ItemContact';
import { Container, Row, Col } from "reactstrap";
import { faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons'

function MapSection() {

    const markers = [
        {
            name: 'Location 1',
            location: {
                lat: -22.94115575469356,
                lng: -43.180284748316865
            }
        }]

    const defaultCenter = {
        lat: -22.94115575469356, lng: -43.180284748316865
    }

    const itemsContact = [
        {
            name: 'GAIA ALEPH, Rio de Janeiro.',
            description: 'Edifício Luiz Simões Lopes, Praia de Botafogo, 190 - 11º Andar - Botafogo, 22250-900',
            icon: faBuilding
        },
        {
            name: '(21) 97501-6000',
            description: 'Segunda a Sexta 8am até 8pm',
            icon: faPhone
        }]

    return (
        <>
            <div className="site-section">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Encontre-nos em</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <Map markers={markers} defaultCenter={defaultCenter} zoom={10} mini={true}/> {/* include it here */}
                        </Col>
                        <Col lg={3} className="mt-3" >
                            {itemsContact.forEach((item, index) => {
                                return (
                                    <ItemContact key={index} name={item.name} description={item.description} icon={item.icon}/>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MapSection;

