import React from 'react';
import { Container, Row, Col } from "reactstrap";

function PlatformDescriptionSection() {
    return (
        <>
            <div className="PlatformDescription-section site-section first">
                <Container>
                    <Row>
                        <Col lg={12} xl={12}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Plataforma</span>
                                    <h3>Focada em você</h3>
                                </div>
                                <p> A plataforma busca a máxima transparência e simplicidade, garantindo controle e monitoramento
                                    adequado do gado e as atividades das máscaras. O usuário dispõe de vários gráficos e dados de
                                    interés onde os principais gráficos são:</p>
                                    <ul>
                                        <li>Geração de créditos de carbono (toneladas de CO2) no tempo</li>
                                        <li>Receita por dia e total em diferentes janelas de tempo</li>
                                        <li>Cabeças com máscara no tempo</li>
                                        <li>Geolocalização (mapa)</li>
                                    </ul>
                                <p> Por outro lado, os fazendeiros e parceiros também podem gerar relatórios relacionados com as
                                    máscaras e a plataforma e adicionalmente tem informações à sua disposição sobre números de
                                    telefone e e-mails exclusivos para resolver incidentes ou fornecer ideias (SAC). Esta seção
                                    tem o objetivo de garantir a mais alta qualidade e bem-estar aos nossos usuários.</p>
                                <p> Além disso, informamos que existem vários modelos de visualização para diferentes públicos,
                                    agricultores com um o mais fazendas, parceiros dos agricultores e outras organizações (governamentais, ambientais).</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default PlatformDescriptionSection;
