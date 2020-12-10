import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';
const Footer = () => {
    return (
        <div className="pb-0 mb-0">
            <Container className="pb-0 mb-0">
                <div class="footer py-5">
                    <div class="row justify-content-center row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div>
                            <div class="col text-center">



                                <ul class="pages text-left">
                                    <a href="#" className="footer-headline">INFORMATION</a>

                                    <li><a className="" href="#">Privacy Policy</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Shipping Policy</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Global Shipping Rates</a></li>
                                </ul>
                            </div>

                        </div>
                        <div>
                            <div class="col pading-left">


                             
                               <ul class="pages text-left ">
                                    <a href="#" className="footer-headline">HELP</a>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">Science</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                               
                            </div>
                        </div>
                        <div>
                            <div class="col text-center">


                                <ul class="pages text-left">
                                    <a href="#" className="footer-headline">EXTRAS</a>
                                    <li><a href="#">Brands</a></li>
                                    <li><a href="#">Gift Certificates</a></li>
                                    <li><a href="#">Specials</a></li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <div class="col text-center" >


                                <ul class="pages text-left">
                                    <a href="#" className="footer-headline">MY ACCOUNNT</a>

                                    <li><a href="#">Order History</a></li>
                                    <li><a href="#">Customer Group</a></li>
                                    <li><a href="#">Wish List</a></li>
                                    <li><a href="#">Newsletter</a></li>

                                </ul>
                            </div>
                        </div>

                        <div>
                            <div class="col text-center">

                                <ul class="pages text-left">
                                    <a href="#" className="footer-headline">FIND US</a>
                                    <li><a href="#">12134 567 891</a></li>
                                    <li><a href="#">info@gmail.com</a></li>
                                    <li><a href="#">New South, Australia</a></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
            <div style={{ backgroundColor: "#AD256C" }} className="pt-1 pb-2">
                <Container >
                    <Row>
                        <Col md={12}>
                            <p className="text-center text-white pt-1">Copyright © 2020 Divas World™ LLC. All rights reserved.</p>
                            <div className="d-flex justify-content-md-center responsive-footer">
                                <div className="px-2">
                                    <span className="text-white"><FiPhone></FiPhone></span><a href="#" className="text-white px-2">Call Us: 1234567890 (Toll Free)</a>
                                </div>
                                <div className="px-2">
                                    <span className="text-white"><FiPhone></FiPhone></span><a href="#" className="text-white px-2">Call Us: 1234567890 (Toll Free)</a>
                                </div>
                                <div className="px-2">
                                    <span className="text-white"><HiOutlineMailOpen></HiOutlineMailOpen></span><a href="#" className="text-white px-2">info@gmail.com</a>
                                </div>
                               
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Footer
