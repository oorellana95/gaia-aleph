import React from 'react';
import { Container, Row, Col } from "reactstrap";

function TheBeginningSection() {
    return (
        <>
            <div className="TheBeginning-section site-section first">
                <Container>
                    <Row>
                        <Col lg={12} xl={12}>
                            <div className="info">
                                <div className="section-title mb-20px">
                                    <span>Nosso inicio</span>
                                    <h3>Empresa com cultura Gaia</h3>
                                </div>
                                <p>Fundada blabla, pepe, propósito Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui diam, convallis vel velit sit amet, venenatis sollicitudin augue. Phasellus eget tempor ex. Mauris luctus elementum eros non lacinia. Aenean in orci et lorem lobortis cursus at sit amet quam. Maecenas dignissim laoreet nunc non pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque commodo ultrices mauris quis ullamcorper. Nam tincidunt velit ac nisl ullamcorper, non porta magna pretium.</p>
                                <p>Cultura Gaia: Atividades sociais, transparentes, focada a innovaçao... Phasellus tempor egestas magna, vitae mollis nibh accumsan vel. Mauris convallis dolor in justo tincidunt, ullamcorper dictum tortor tristique. Proin quam sem, vestibulum vel luctus ac, elementum et urna. Donec dignissim nibh nibh. Suspendisse pellentesque ante a ipsum auctor ullamcorper. Nullam sem metus, dictum vitae facilisis sit amet, accumsan sit amet massa. Sed nec tortor diam. Etiam est lorem, aliquet eget erat vitae, porttitor pellentesque urna.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TheBeginningSection;
