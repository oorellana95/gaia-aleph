import React from 'react';
import { Container, Row, Col } from "reactstrap";
import TitleDescriptionListCard from 'components/TitleDescriptionListCard';
import { Link } from 'react-router-dom';

function PlatformClientTypesSection() {

    const offers = [
        {
            title: 'Fazendeiro Única',
            description: 'Bovinos agrupados em um único grupo',
            point1: 'Disponibilidade de tudos os gráficos da plataforma',
            point2: 'Area de control e comunicaçao direita com o equipo Gaia',
            img: require("assets/img/platform-visibility1.png")
        },
        {
            title: 'Fazendeiro Multipla',
            description: 'Bovinos agrupados em diferentes grupos',
            point1: 'Opções adicionais para ver os dados agrupados',
            point2: 'Opções adicionais para contrastar os dados entre grupo',
            img: require("assets/img/platform-visibility2.png")
        },
        {
            title: 'Parceiro e Outros',
            description: 'Pode ver e agrupar os dados do seus parceiros',
            point1: 'Opções adicionais para ver os dados invividuais dos fazenderos',
            point2: 'Opções adicionais para ver dados de fazendeiros agrupados',
            point3: 'Dados em relação à receita dos produtores são eliminados',
            img: require("assets/img/platform-visibility3.png")
        }]

    return (
        <>
            <div className="VisibilidadeDaPlataforma-section site-section bg-light">
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center mb-3 section-heading">
                            <h2 className="mb-5">Visibilidades da plataforma</h2>
                        </Col>
                    </Row>
                    <Row>
                        {offers.map(item => {
                            return (
                                <TitleDescriptionListCard title={item.title} description={item.description}  point1={item.point1} point2={item.point2} point3={item.point3} img={item.img} />
                            )
                        })}
                    </Row>
                    <Row>
                        <Col  className="mx-auto text-center mt-4">
                            <Link to={"/contact"}>
                                <span type="button" className="btn-contact">Contata</span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default PlatformClientTypesSection;
