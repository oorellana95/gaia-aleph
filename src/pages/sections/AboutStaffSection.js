import React from 'react';
import { Container, Row, Col } from "reactstrap";
import FlippedCard from 'components/FlippedCard';

function AboutStaffSection() {

    const staff = [
        {
            name: 'Rafael Coelho',
            description: 'Responsável pelo setor de Pesquisa e Desenvolvimento',
            hrefLinkdIn: 'https://www.linkedin.com/in/rafael-coelho-de-souza-krzonkalla-1a38781b4/',
            img: require("assets/img/raphael-staff.jpg"),
            flipped: require("assets/mp4/flipped_hitos.mp4")
        },
        {
            name: 'Pedro Gaya',
            description: 'Supervisor de Finanças e Operações',
            hrefLinkdIn: 'https://www.linkedin.com/in/plgaya/',
            img: require("assets/img/gaia-staff.jpg"),
            flipped: require("assets/mp4/flipped_lara.mp4")
        },
        {
            name: 'Oscar Orellana',
            description: 'Técnico de Plataformas e Sistemas Informáticos',
            hrefLinkdIn: 'https://www.linkedin.com/in/oscar-orellana-gonzalez-15535b16a/',
            img: require("assets/img/oorellana.jpg"),
            flipped: require("assets/mp4/flipped_orellana.mp4")
        }]

    return (
        <>
            <div className="site-section">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Equipe empreendedora</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {staff.map(item => {
                            return (
                                <FlippedCard name={item.name} description={item.description} hrefGit={item.hrefGit} hrefLinkdIn={item.hrefLinkdIn}  img={item.img} flipped={item.flipped}  />
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AboutStaffSection;