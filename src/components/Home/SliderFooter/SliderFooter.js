import React from 'react'
import './SliderFooter.css'
import track from '../../../images/track.png';
import spinner from '../../../images/spinner.png';
import earphone from '../../../images/earphone.png';
import bag from '../../../images/bag.png';
import { Col, Container, Row } from 'react-bootstrap';
const SliderFooter = () => {
    return (
        <div style={{backgroundColor:"#AD256C"}}>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={4} lg={3}  sm={6}>
                        <div className="d-flex text-white py-5">
                            <div className="d-flex align-items-center pr-3">
                                <img src={track} className="w-100" alt=""/>
                            </div>
                            <div className="">
                                <h4>Free Shiping</h4>
                                <p className="pb-0 mb-0">On all orders over</p>
                                <p className="p-0 m-0">$75.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={3}  sm={6}>
                    <div className="d-flex text-white py-5">
                            <div className="d-flex align-items-center pr-3">
                                <img src={spinner} className="w-100" alt=""/>
                            </div>
                            <div>
                                <h4>Free Returns</h4>
                                <p className="pb-0 mb-0">Returns are free within <br/>9 days</p>
                                {/* <p className="p-0 m-0">$75.00</p> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={3}  sm={6}>
                    <div className="d-flex text-white py-5">
                            <div className="d-flex align-items-center pr-3">
                                <img src={earphone} className="w-100" alt=""/>
                            </div>
                            <div>
                                <h4>27/4 Online Support</h4>
                                <p className="pb-0 mb-0">Contact us 24 hours a day</p>
                                {/* <p className="p-0 m-0">$75.00</p> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={3}  sm={6}>
                    <div className="d-flex text-white py-5">
                            <div className="d-flex align-items-center pr-3">
                                <img src={bag} className="w-100" alt=""/>
                            </div>
                            <div>
                                <h4>Payment Security</h4>
                                <p className="pb-0 mb-0">Your payment are safe with  us</p>
                                {/* <p className="p-0 m-0">$75.00</p> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderFooter
