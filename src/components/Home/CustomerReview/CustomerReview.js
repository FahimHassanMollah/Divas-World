import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './CustomerReview.css'
import { FaStar, FaRegStar } from 'react-icons/fa';
import man from '../../../images/man.png';
import comaGray from '../../../images/comaGray.png'
const CustomerReview = () => {
    return (
        <div className="py-5">
            <div className="d-flex justify-content-center">
                <h2 className="underline ">WHAT CUSTOMER SAY</h2>
            </div>
            <Container className="pt-5 mt-1">
                <Row className="d-flex justify-content-between">
                    <Col md={4} className='py-2'>
                        <div className="fard px-3 py-3">
                            <div className="coma-gray">
                                <small style={{ fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</small>
                            </div>
                            <div>
                                <p className="pt-0 mt-0 pb-0 my-0 ml-2 text-center">
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                </p>
                            </div>
                            <div className="d-flex pt-2">
                                <div className="pr-2">
                                    <img src={man} alt="" />
                                </div>
                                <div className="pl-2">
                                    <h4 className="pb-0 mb-0">Justin Bieber</h4>
                                    <small>Eastamp user</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='py-2'>
                        <div className="fard px-3 py-3">
                            <div>
                                <small className="coma-gray" style={{ fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</small>
                            </div>
                            <div>
                                <p className="pt-0 mt-0 pb-0 my-0 ml-2 text-center">
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                </p>
                            </div>
                            <div className="d-flex pt-2">
                                <div className="pr-2">
                                    <img src={man} alt="" />
                                </div>
                                <div className="pl-2">
                                    <h4 className="pb-0 mb-0">Justin Bieber</h4>
                                    <small>Eastamp user</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='py-2'>
                        <div className="fard px-3 py-3">
                            <div>
                                <small className="coma-gray" style={{ fontSize: "10px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</small>
                            </div>
                            <div>
                                <p className="pt-0 mt-0 pb-0 my-0 ml-2 text-center">
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                    <small className="star-color"><FaStar></FaStar></small>
                                </p>
                            </div>
                            <div className="d-flex pt-2">
                                <div className="pr-2">
                                    <img src={man} alt="" />
                                </div>
                                <div className="pl-2">
                                    <h4 className="pb-0 mb-0">Justin Bieber</h4>
                                    <small>Eastamp user</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomerReview
