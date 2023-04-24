import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Card(props) {
    return (
        <>
            <Col lg={4} md={6} className="mb-5">
                <div className="staff-frame text-center">
                    {props.img && <span className="d-block mb-4 thumbnail">
                        <img src={props.img} alt={"image " + props.name} className="img-fluid"></img>
                    </span>}
                    <div className="p-4">
                        <h3 className="heading mb-3">{props.name}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </Col>
        </>
    );
}


export default Card;