import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HService from '../HService/HService';

const HomePageServices = () => {
    const [homePageService, setHomePageService] = useState([]);
    useEffect(() => {
        fetch("https://rafaswe.github.io/data/Services.json")
            .then(res => res.json())
            .then(data => setHomePageService(data))
    })
    return (
        <Container className="pt-5 mb-5">
            <h1 className="mt-5 text-center">Our Services</h1>
            <hr className="mb-5 " />
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    homePageService.map(hService => <HService key={hService.id} hService={hService}></HService>)
                }
            </Row>
        </Container>
    );
};

export default HomePageServices;