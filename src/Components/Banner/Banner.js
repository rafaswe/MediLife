import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (

        <div className="banner my-5 pt-5">
            <Container>
                <div className=" bannerText d-flex justify-content-center align-items-center">
                    <div className="text-center text-white">
                        <h1 className="fst-italic banner-heading"><span className="text-danger">MEDI</span><span className="text-white">Life</span></h1>
                        <p>Stay Happy and Stay healthy with MEDILIFE.</p>
                        <p>We are promised to give the best treatment that you ever had.</p>
                        {/* button section  */}
                        <div className="row gx-3 text-white">
                            <div className="text-end col-lg-6 col-sm-12">
                                <button className="btn custom-btn text-white">Our Services</button>
                            </div>
                            <div className=" text-start col-lg-6 col-sm-12">
                                <button className="btn custom-btn text-white">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Banner;