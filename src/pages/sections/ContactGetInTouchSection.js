
import React from 'react'
import ItemContact from 'components/ItemContact';
import { Container, Row, Col, FormGroup, Form, Input} from "reactstrap";
import { faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function GetInTouchSection() {

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
        },
        {
            name: 'coelhorafael8@gmail.com',
            description: 'Envie-nos sua consulta a qualquer momento!',
            icon: faEnvelope
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
                        <Col lg={8}>
                            <Form className="form-design" action="" method="post" id="contactForm" novalidate="novalidate">
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Digite a mensagem" ></textarea>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup className="form-group">
                                            <Input className="form-control valid" name="name" id="name" type="text" placeholder="Digite seu nome"></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup className="form-group">
                                            <Input className="form-control valid" name="email" id="email" type="email" placeholder="Digite o endereço de e-mail"></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup className="form-group">
                                            <Input className="form-control" name="subject" id="subject" type="text" placeholder="Entrar Assunto"></Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="form-group mt-3">
                                    <Link to={"/pikaemail"}>
                                        <span type="button"  className="button button-contactForm boxed-btn">Enviar</span>
                                    </Link>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg={4} className="mt-3" >
                            {itemsContact.map(item => {
                                return (
                                    <ItemContact name={item.name} description={item.description} icon={item.icon} />
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default GetInTouchSection;