import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';

const Contact = () => {
    //contact section
    return (
        <Container className="my-5 pt-5">
            <Row>
                <Col xs={12} lg={6}>
                    {/* FAQ  */}
                    <h1 className="mb-3 custom-header-color2 text-decoration-underline text-center">Frequent Asked Ques</h1>
                    <Accordion className="rounded">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I be seen without an appointment?</Accordion.Header>
                            <Accordion.Body>
                                Calling our office at the first sign of illness helps to ensure that you receive an appointment time sooner rather than later. Normally, we are able to schedule same-day appointments for those requiring immediate non – emergency care.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>When to call 911 prior to calling my healthcare provider?</Accordion.Header>
                            <Accordion.Body>
                                Yes, you can contact your personalized care team, by calling our main number, 305.685.5689. You can also register in our practice’s Patient Portal (medilife.com).
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Why is having a primary care physician so important?</Accordion.Header>
                            <Accordion.Body>
                                Choosing a primary care doctor is a great way to maintain exceptional health throughout the course of your life. In addition to treating acute illnesses, your primary care physician can partner with you to meet your long term health goals
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do I need a referral from my Primary Care Physician to see a specialist?</Accordion.Header>
                            <Accordion.Body>
                                As your primary care physician and care taker, we prefer you come and see your primary care physician before seeing a specialist. Your physician will determine whether you need to be seen by a specialist due to your medical condition.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is the Medicare criteria for home health care?</Accordion.Header>
                            <Accordion.Body>
                                In order to receive home health care services, physical therapy,have a physician’s order for home health care.Medicare considers a person to be homebound if leaving the home and taxing effort considerable and if s/he has a condition due to an illness or injury which restricts the ability to leave home.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What type of health insurance plans do you accept?</Accordion.Header>
                            <Accordion.Body>
                                For your convenience, we file most types of insurance, including Medicare, Medicaid, Individual and Commercial plans. For a complete list of insurance companies and accepted Health plans, please visit our Insurance page under Patient Resources.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col xs={12} lg={6}>
                    {/* Map Location  */}
                    <Container className="h-100 ">

                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58427.2354045867!2d90.33874827910158!3d23.757996300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf54bdd804c3%3A0x92d06854212b2d2c!2sMediLife%20Support%20Ltd.!5e0!3m2!1sen!2sbd!4v1634593407325!5m2!1sen!2sbd" className="h-100 w-100 my-auto border border-4 rounded rounded-3" allowfullscreen="" loading="lazy"></Iframe>
                    </Container>
                </Col>
            </Row>
            <hr />
        </Container>
    );
};

export default Contact;