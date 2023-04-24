import React from 'react'
import { Col } from "reactstrap";

function TitleDescriptionListCard(props) {
    return (
        <>
            <Col xl={4} md={4}>
                <div className="single_card">
                    <div className="about_thumb">
                        <img src={props.img} alt=""></img>
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <ul>
                        {props.point1 && <li>{props.point1}</li>}
                        {props.point2 && <li>{props.point2}</li>}
                        {props.point3 && <li>{props.point3}</li>}
                    </ul>
                </div>
            </Col>
        </>
    );
}

export default TitleDescriptionListCard;