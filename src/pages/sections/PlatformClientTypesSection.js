import React from 'react';
import { Container, Row, Col } from "reactstrap";
import TitleDescriptionListCard from 'components/TitleDescriptionListCard';
import { Link } from 'react-router-dom';

function PlatformClientTypesSection() {

    const offers = [
        {
            title: 'Empresas com uma única propriedade',
            point1: 'Dados detalhados e individualizados',
            point2: 'Gráficos com informações agregadas',
            point3: 'Canal de comunicação direta com a Gaia',
            img: require("assets/img/platform-visibility1.png")
        },
        {
            title: 'Empresas com múltiplas propriedades',
            point1: 'Todos os benefícios das propriedades únicas',
            point2: 'Dados conjuntos e de cada fazenda',
            point3: 'Comparativos entre cada área',
            img: require("assets/img/platform-visibility2.png")
        },
        {
            title: 'Parceiros, Compradores de Crédito e Outros',
            point1: 'Dados em blockchain de cada máscara',
            point2: 'Verificação independente da eliminação do metano',
            point3: 'Gráficos interativos para mensurar o impacto e performance históricos',
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
