import React, { useState } from 'react'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import './ExclusiveProduct.css';
import top from '../../../images/tops.png';
import saree from '../../../images/saree.png';
import winter from '../../../images/winter.png';
import legenga from '../../../images/lagaynga.png';
import { FaStar, FaRegStar } from 'react-icons/fa';
import cart from '../../../images/cart .png'
import love from '../../../images/love.png'
import zoom from '../../../images/zoom.png'
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
                    {/* <Row className="pt-4"> */}
                        {/* {
                            itemName === "Best sellers" && */}
                            <div className="">

                                <div id="sliders" class="carousel slide" data-ride="carousel" data-interval="5000">
                                    <ol class="carousel-indicators">
                                        <li data-target="#sliders" data-slide-to="0" class="active"></li>
                                        <li data-target="#sliders" data-slide-to="1"></li>
                                        <li data-target="#sliders" data-slide-to="2"></li>


                                    </ol>

                                    <div class="carousel-inner pb-5">
                                        <div class="carousel-item active">

                                            <div>
                                            <div class="card-deck">
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={top} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={saree} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={winter} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={legenga} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>


                                        <div class="carousel-item">
                                            <div class="card-deck">
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={top} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={saree} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={winter} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={legenga} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="card-deck">
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={top} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={saree} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={winter} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card border-top-0 border-radius container-card" >
                                                    <div className="container-card">
                                                        <img class="card-img-top" style={{ borderRadius: "" }} src={legenga} />
                                                        <div class="overlay">

                                                            <div className="d-flex justify-content-center icon">
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={love} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className=" w-100" src={cart} alt="" />
                                                                </span>
                                                                <span className="text-white d-inline-block px-2 py-1 mr-3 primary-background-color text-center ">
                                                                    <img className="w-100" src={zoom} alt="" />
                                                                </span>
                                                            </div>
                                                            {/* <img className="primary-background-color img-size" src={cart} alt=""/> */}

                                                        </div>
                                                    </div>

                                                    <div class="card-body">
                                                        <h4 className="card-title pb-0 mb-0">Womans Tops</h4>
                                                        <h6 className="card-text pb mb-0 primary-color">$550.00</h6>
                                                        <p className="card-text pt-0 mt-0 pb-0 my-0 star-content">
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color"><FaStar></FaStar></small>
                                                            <small className="star-color pr-1"><FaRegStar style={{ borderColor: "" }}></FaRegStar></small> <span>(24)</span>

                                                        </p>
                                                        <p className="card-text pt-2 mt-0 pb-0 my-0 cicle-color">
                                                            <span class="dot" style={{ backgroundColor: "#FEB423" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#99BC06" }}></span>
                                                            <span class="dot" style={{ backgroundColor: "#07A098" }}></span>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>



                        {/* } */}
                    {/* </Row> */}
                </div>
            </Container>
        </div>
    )
}

export default ExclusiveProduct
