import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../Assets/Image/logo.png'
import './Footer.css'
const Footer = () => {

    function sendMsg() {
        var msgBody = document.getElementById('msg-id').value;
        window.open('mailto:mahiya35-2706@diu.edu.bd?subject=subject&body=' + msgBody);
    }
    return (
        <Container className="py-4 ">
            <Row className="align-items-center text-center">
                {/* Usefull links part  */}
                <Col xs={12} lg={4}>
                    <h3>Useful Links</h3>
                    <p><Link to='/about' className="text-decoration-none text-muted">About Us</Link></p>
                    <p><Link to='/services' className="text-decoration-none text-muted">Services</Link></p>
                </Col>
                <Col xs={12} lg={4}>
                    {/* This section contains scocial media links  */}
                    <h1> <img src={image} width="100px" alt="" /> </h1>
                    <h1 className="fst-italic "><span className="custom-header-text-color">MEDI</span><span className="text-secondary">Life</span></h1>
                    <div className="links">
                        <a href="https://www.facebook.com/odhorajaman.sporshika/" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-secondary"> <i className="fab fa-2x fa-facebook-square"></i></a>
                        <a href="https://www.youtube.com/channel/UC-X9_tj-HW7zspyxDUFA9SA" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-secondary"> <i className="fab fa-2x fa-youtube-square"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=+8801631907601&text=Hello," target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-secondary"> <i className="fab fa-2x fa-whatsapp-square"></i></a>
                        <a href="mailto:mahiya35-2706@diu.edu.bd" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-secondary"> <i className="fas fa-2x fa-envelope"></i></a>
                    </div>
                </Col>
                <Col xs={12} lg={4}>
                    {/* In this section you can give mail */}
                    <form>
                        <textarea name="msg" id="msg-id" cols="20" rows="6"
                            className="form-control my-3 "
                            placeholder="Write Your message"></textarea>
                        <button className="btn btn-outline-secondary m-3 px-3" onClick={() => sendMsg()}> send
                            <i className="fas fa-arrow-right ps-1 btn-icon1"></i>
                        </button>
                        <button className="btn btn-outline-secondary px-3" type="reset">reset <i className="fas fa-times ps-2 btn-icon2"></i></button>
                    </form>
                </Col>
            </Row>
        </Container >
    );
};

export default Footer;