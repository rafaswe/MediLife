import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../../Assets/Image/logo.png';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const imgTag = <img src={user.photoURL} alt="" srcset="" className="w-50 rounded rounded-circle" />
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" className="fw-bold">
                        <img
                            alt=""
                            src={img}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="custom-header-text-color">MEDI</span><span className="text-secondary">Life</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end my-2">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact us</Nav.Link>
                        <div className="ms-3 d-flex align-items-center">
                            {
                                user.email && <span className="me-1">{imgTag}</span>

                            }
                            {
                                user.email ? <button onClick={logOut} className="btn btn-outline-danger">Log Out</button> :
                                    <Nav.Link as={NavLink} to="/login" className="login-btn">Log In</Nav.Link>
                            }
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;