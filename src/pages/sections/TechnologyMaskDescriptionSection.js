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
                                <p> Dispositivo para conversão de metano em dióxido de carbono e água, reduzindo em 96% o consequente efeito estufa e
                                    possibilitando um ganho per capita de 2,1 créditos de carbono. O
                                    aparelho tem conforto e segurança e em nada prejudica a
                                    atividade pecuária.</p>
                                <p> A máscara consiste em um pequeno dispositivo com interior
                                    metálico amarrado diretamente acima das narinas do animal.
                                    Internamente, há um tubo que conduz o ar para fora do
                                    dispositivo, passando por uma pequena válvula. Quando um
                                    detector de metano localizado no tubo percebe que a
                                    concentração de metano é alta, a válvula é fechada e o ar é sugado
                                    através de um filtro para aumentar a razão de metano na solução.
                                    Em seguida, o gás se acumula na câmara até um ponto
                                    predeterminado, quando a oxidação é iniciada e a válvula volta a
                                    se abrir, bloqueando a entrada da câmara. Ao final dessa
                                    conversão, a saída da câmara é aberta através de um mecanismo
                                    de membrana solta, permitindo que os gases escapem. Uma vez
                                    estabilizada a pressão, o interior se resfria naturalmente, criando
                                    um ambiente de pressão baixa equivalente à etapa inicial.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MaskDescriptionSection;
