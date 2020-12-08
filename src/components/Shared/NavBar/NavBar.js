import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../../images/logo.png'
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-md fixed-top-sm  bg-dark navbar-dark">
                <Container>
                    <Row>
                        <Col md={12} sm={12}>
                            <a href="/" className="navbar-brand">Top</a>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link px-2" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2" href="#">Link</a>
                                </li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav> */}
            {/* <nav className="navbar navbar-expand-md bg-light navbar-light">
                <Container>
                    <Row>
                        <Col md={12} sm={12}>
                            <div className="navbar-collapse collapse  pt-md-0" id="navbar2">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Link 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link 2</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav> */}
            {/* <Navbar expand="md" >
                <Container>
                    <Navbar.Brand href="/" className="" >
                        <img className="" src="" alt="image"/>
                    </Navbar.Brand>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link px-2" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-2" href="#">Link</a>
                                </li>
                            </ul>
                    <Navbar.Toggle aria-controls="basic-navbar-nav2sdfasdf" />
                    <Navbar.Collapse id="basic-navbear-nav3a">
                        <Nav className="ml-auto item-left">

                            <Link className='nav-link mr-4' to={'/'}>Homes</Link>
                            <Link className='nav-link mr-4' to={'/ourPortfolio'}>Our Portfolios</Link>
                            <Link className='nav-link mr-4' to={'/ourTeam'}>Our Teams</Link>
                            <Link className='nav-link mr-4' to={'/contactUs'}>Contact Uss</Link>
                          

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                             </a>
                            <div class="dropdown-menu" aria-haspopup="true"  aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav> */}
            <nav class="navbar navbar-expand-md fixed-top-sm justify-content-start flex-nowrap navbar-dark navbar-background-color">
                <Container>
                    <a href="/" class="navbar-brand">
                        <img className="" style={{ width: "250px" }} src={logo} alt="" />
                    </a>
                    <ul class="navbar-nav flex-row mr-auto">
                        <li class="nav-item active">
                            <div className="p-0 m-0  h-100 pl-5">
                                <input type="text" className="border-none" style={{ width: "300px", height: "100%", padding: "0px 10px", border: "none!important" }} placeholder="Search Product Name" />
                               
                             
                            </div>

                        </li>
                        <li>
                        <select className="h-100">
                                    <option value="All">All Category</option>
                                    <option value="Man">Man</option>
                                    <option value="Woman">Woman</option>
                                    <option value="Child">Child</option>
                             </select>
                             <button style={{backgroundColor:"#e83cac",border:"none",outline:"none"}} className="h-100 px-3" type="submit"><span style={{color:"white"}}><FaSearch></FaSearch></span></button>
                        </li>
                        <li>
                       
                        </li>
                       
                    </ul>
                </Container>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <Navbar expand="md" >
                <Container>

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar.Collapse id="navbar2">

                        <Nav className="mx-auto item-left text-dark">

                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/'}>SAREE</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/ourPortfolio'}>ANARKALI</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/ourTeam'}>SALWAR SUIT</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/contactUs'}>KURTI</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/contactUs'}>PAKISTANI</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/contactUs'}>LEHENGA</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/contactUs'}>WINTER</Link>
                            <Link className='nav-link mr-5 font-weight-bold text-dark' to={'/contactUs'}>JEWELRY</Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
