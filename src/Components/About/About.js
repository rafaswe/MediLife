import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../Assets/Image/logo.png'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
    const quoteIcon = <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="custom-color-fourth" />
    return (
        <div className="mt-5 pt-5">
            <Container>
                {/* about section ui */}
                <h1 className="my-5 text-center">Our Thoughts About Patient</h1>
                <Row className="align-items-center my-5 text-center">
                    <Col xs={12} md={6} lg={4}>
                        {/* about section img */}
                        <img className="rounded rounded-circle w-75" src={img} alt="" srcSet="" />
                    </Col>
                    <Col xs={12} md={6} lg={8} className="ms-0 text-start">
                        {/* about section breif */}
                        <h2 className="custom-color-primary">MediLife</h2>
                        <p className="custom-color-third fw-bold fst-italic"><small>People's Choice HealthCare</small></p>
                        <br />
                        {quoteIcon} <br />
                        <p className="text-muted">MediLife Healthcare services have seen a strong paradigm shift in recent years globally. At the clinical level, personalized care to individuals is usually provided based on medical history, examination, vital signs, and evidence. However, in the recent times, the focus on these traditional tenets is being taken over by the aspects of learning, metrics, and quality improvement. The last decade has seen a global rise in adoption of Electronic Health Records, catalyzing the increase in the complexity and volume of the health data generated in the process. Apart from the EHR-sourced ordinary patient data, due to the change in treatment paradigms and focus on lifestyle and comprehensive healthcare, new varieties of health-data about medical conditions, lifestyle, underlying genetics, medications, and treatment approaches also showed a paramount rise.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;