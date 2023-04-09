import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HService.css'

const HService = (props) => {
    // distruturing from props value 
    const { id, name, img, price, text } = props.hService;

    // font aswesome icon use 
    const doller = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div >
            {/* this is the responsible for showing course in the banner  */}
            <Col className="hService">
                <Card className="rounded">
                    <div className="overflow-hidden">
                        <Card.Img variant="top" src={img} height="250px" className="rounded hService-img" />
                    </div>
                    <Card.Body>
                        <Card.Title className="custom-header-color1 fs-3">{name}</Card.Title>
                        <Card.Text>
                            <p className="text-muted">{text}</p>
                            <p className="fw-bold text-muted">Price: {price} {doller}</p>
                        </Card.Text>

                        <Link to={`/services/${id}`}>
                            <button className="btn btn-warning">See More</button>
                        </Link>
                    </Card.Body>

                </Card>
            </Col>
        </div >
    );
};

export default HService;