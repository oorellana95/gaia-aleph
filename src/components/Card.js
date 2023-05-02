import React from "react";
import { Col } from "reactstrap";

function Card(props) {
    return (
        <>
            <Col lg={4} md={6} className="mb-5">
                <div className={props.removeBorderBoxes ? "text-center" :"staff-frame text-center"}>
                    {props.img && <span className="d-block mb-4 thumbnail">
                        <img src={props.img} alt={"image " + props.name} className="img-fluid"></img>
                    </span>}
                    {props.number && 
                    <div className="circle-frame mx-auto">
                        <div className="number-circle mt-2">{props.number}</div>
                        </div>}
                        
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