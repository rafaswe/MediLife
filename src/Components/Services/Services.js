import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Services = () => {
    const { servicesId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://rafaswe.github.io/data/Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [servicesId]);
    const singleService = services.find(service => Number(service.id) === Number(servicesId));
    return (
        <div className="my-5 pt-5 d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="p-2">
                <Card.Img variant="top" src={singleService?.img} />
                <Card.Body>
                    <Card.Title>{singleService?.name}</Card.Title>
                    <Card.Text>
                        {singleService?.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;