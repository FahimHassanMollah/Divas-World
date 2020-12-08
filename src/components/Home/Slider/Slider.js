import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Slider.css'
import sliderImage from "../../../images/slider.png";
const Slider = () => {
    return (
        <div className="background-color-slider">

            <div id="slider" class="carousel slide" data-ride="carousel" data-interval="9000">
                <ol class="carousel-indicators">
                    <li data-target="#slider" data-slide-to="0" class="active"></li>
                    <li data-target="#slider" data-slide-to="1"></li>
                    <li data-target="#slider" data-slide-to="2"></li>


                </ol>

                <div class="carousel-inner pb-5">
                    <div class="carousel-item active">
                        <Container className="pt-5 pb-1">
                            <Row>
                                <Col md={6} className="d-flex align-items-center">
                                    <div>
                                        <h4 className="text-color">Get up to 50% off Today Only!</h4>
                                        <h1 style={{fontSize:"60px"}}>Woman Fashion</h1>
                                        <p className="text-color">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid</p>
                                        <div className="pt-2">
                                            <button className="shop-now-btn">shop now</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img src={sliderImage} className="w-100" alt="sdf" />

                                </Col>
                            </Row>
                        </Container>
                     
                    </div>


                    <div class="carousel-item">
                        <Container className="pt-5 pb-1">
                            <Row>
                                <Col md={6} className="d-flex align-items-center">
                                    <div>
                                        <h4 className="text-color">Get up to 50% off Today Only!</h4>
                                        <h1 style={{fontSize:"60px"}}>Woman Fashion</h1>
                                        <p className="text-color">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid</p>
                                        <div className="pt-2">
                                            <button className="shop-now-btn">shop now</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img src={sliderImage} className="w-100" alt="sdf" />

                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div class="carousel-item">
                    <Container className="pt-5 pb-1">
                            <Row>
                                <Col md={6} className="d-flex align-items-center">
                                    <div>
                                        <h4 className="text-color">Get up to 50% off Today Only!</h4>
                                        <h1 style={{fontSize:"60px"}}>Woman Fashion</h1>
                                        <p className="text-color">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid</p>
                                        <div className="pt-2">
                                            <button className="shop-now-btn">shop now</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img src={sliderImage} className="w-100" alt="sdf" />

                                </Col>
                            </Row>
                        </Container>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Slider
