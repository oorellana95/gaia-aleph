
import React from 'react'
import Map from 'components/Map';
import { Container } from "reactstrap";

function ContactMapSection() {
    const markers = [
        {
            name: 'Location 1',
            location: {
                lat: -22.94115575469356,
                lng: -43.180284748316865
            }
        }]

    const defaultCenter = {
        lat: -22.94115575469356, lng: -43.180284748316865
    }

    return (
        <>
            <div className="site-section">
                <Container>
                    <Map markers={markers} defaultCenter={defaultCenter} zoom={10} mini={false}/> {/* include it here */}
                </Container>
            </div>
        </>
    );
}

export default ContactMapSection;

