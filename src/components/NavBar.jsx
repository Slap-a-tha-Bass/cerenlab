import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">
                <div className="logo-button border-dark">
                    <div className="logo-1">C</div>
                    <div className="logo-2">YF</div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/mission">who we are</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/research">our research</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/people">people and values</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/news">news</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/resources">resources</Link>
                </Nav>
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <a className="join-button d-flex align-items-center" href="mailto:cyarar@uab.edu">join us</a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
