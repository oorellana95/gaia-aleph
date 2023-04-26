import React from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer" data-background-color="black">
        <Container>
          <Row>
            <Col lg={4} xs={12}>
              <h4>Propósito Gaia</h4>
              Procuramos gerar valor para nossos clientes, parceiros e sociedade através da implementação de tecnologias de ponta no setor pecuário, de forma a impactar a sustentabilidade e produtividade da atividade, se comprometendo com o bem-estar animal.
            </Col>
            <Col lg={4} xs={12} className="text-center">
              <img
                alt="..."
                className="logo-gaia"
                src={require("assets/img/logo-gaia.png")}
              ></img>
            </Col>

            <Col lg={4} xs={12}>
              <h4>Informações de contato</h4>
              <ul>
                <li>Edifício Luiz Simões Lopes, Praia de Botafogo, 190 - 11º Andar - Botafogo, Rio de Janeiro - RJ, 22250-900</li>
                <br /><br />
                <li>coelhorafael8@gmail.com</li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5 mb-3">
            <div className="copyright" id="copyright">

              © {new Date().getFullYear()}, Todos os direitos reservados a{" "}

              <a href="/" rel="noopener noreferrer" target="_blank"> GaiaAleph </a>

              {" "}| Este webside é feito por: {" "}

              <a href="https://github.com/oorellana95" rel="noopener noreferrer" target="_blank">@Oscar</a>

            </div>
          </Row>
        </Container>
      </footer>
    )
  }

}

export default Footer;
