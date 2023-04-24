import React from 'react';
import { Container, Row, Col } from "reactstrap";

function MaskDescriptionSection() {
    return (
        <>
            <div className="MaskDescription-section site-section first">
                <Container>
                    <Row>
                        <Col lg={12} xl={12}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Aparelho facial bovino</span>
                                    <h3>Descubra como funciona</h3>
                                </div>
                                <p> Aparelho facial bovino para conversão de metano em dióxido de carbono e água, reduzindo em 96% o consequente efeito estufa 
                                    e possibilitando um ganho per capita de 2,1 créditos de carbono. O aparelho tem conforto e segurança e em nada prejudica a 
                                    atividade pecuária. Em todo sentido, o artefato beneficia o bem-estar social, simultaneamente melhorando a margem de lucro 
                                    e a reputação da atividade já existente.</p>
                                <p> A máscara consiste em um pequeno dispositivo com interior metálico amarrado diretamente acima das narinas do animal. 
                                    Internamente, há um tubo que conduz o ar para fora do dispositivo, passando por uma pequena válvula. Quando um detector de 
                                    metano localizado no tubo percebe que a concentração de metano é alta, a válvula é fechada e o ar é sugado através de um filtro 
                                    para aumentar a razão de metano na solução. Em seguida, o metano se acumula na câmara até fazer a conversão. Nesse momento a 
                                    válvula volta a se abrir, bloqueando a passagem do tubo à câmara. Ao final dessa conversão, a saída da câmara ao ar livre é aberta 
                                    através de um mecanismo de membrana solta, permitindo que os gases escaparem e as condições de temperatura e pressao se restabelecen
                                    para permitir o início de um novo ciclo.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MaskDescriptionSection;
