import React, { useState } from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import './ExclusiveProduct.css';
import top from '../../../images/tops.png';
import saree from '../../../images/saree.png';
import winter from '../../../images/winter.png';
import legenga from '../../../images/lagaynga.png';
import { FaStar,FaRegStar } from 'react-icons/fa';
const ExclusiveProduct = () => {
    const [itemName, setItemName] = useState("newArrival");
    const itemClickBtn = (itemName) => {
        setItemName(itemName);
    }
    return (
        <div className="py-5" style={{ backgroundColor: "#EFEFEF" }}>
            <Container>
                <div className="text-center">
                    <h2 className="text-center underline text-center">Exclusive Products</h2>
                </div>
                <div className="pt-3 tab-item">
                    <Nav className="justify-content-center" >
                        <Nav.Item>
                            <a onClick={() => itemClickBtn("New Arrival")} className="btn">New Arrival</a>
                        </Nav.Item>
                        <Nav.Item>
                            <a onClick={() => itemClickBtn("Best sellers")} eventKey="link-1" className="btn">Best Sellers</a>
                        </Nav.Item>
                        <Nav.Item>
                            <a eventKey="link-2" className="btn">Featured</a>
                        </Nav.Item>
                        <Nav.Item>
                            <a eventKey="" className="btn">Special Offer</a>
                        </Nav.Item>
                    </Nav>
                    <Row className="pt-4">
                        {
                            itemName === "Best sellers" &&

                            <div class="card-deck">
                                <div className="card border-top-0 border-radius" >
                                    <div className="container-card">
                                        <img class="card-img-top" style={{ borderRadius: "" }} src={top} />
                                        <div class="overlay">
                                            <a href="#" class="icon" title="User Profile">
                                                <i class="fa fa-user"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title pb-0 mb-0">Womans Tops</h4>
                                        <h6 class="card-text pb mb-0 primary-color">$550.00</h6>
                                        <p class="card-text pt-0 mt-0 pb-0 my-0">
                                            <small class="star-color"><FaStar></FaStar></small>
                                            <small class="star-color"><FaStar></FaStar></small>
                                            <small class="star-color"><FaStar></FaStar></small>
                                            <small class="star-color"><FaStar></FaStar></small>
                                            <small class="star-color pr-1"><FaRegStar style={{borderColor:""}}></FaRegStar></small> <span>(24)</span>

                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src={saree} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src={winter} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src={legenga} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>

                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ExclusiveProduct
