import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import Home from '../views/Home';
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">CYF</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


        // <div className='navbar navbar-expand-md bg-dark navbar-dark'>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="collapseNavbar">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <a href="/whoweare" className="nav-link">who we are</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/research" className="nav-link">who we are</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/people" className="nav-link">who we are</a>
        //             </li>
        //         </ul>
        //     </div>
        //     <Link className='logo-button' to='/'>
        //         <div className="logo-1">C</div>
        //         <div className="logo-2">YF</div>
        //     </Link>
        //     <Link className='nav-button' to='/'>who we are</Link>
        //     <Link className='nav-button' to='/'>our research</Link>
        //     <Link className='nav-button' to='/'>people and values</Link>
        //     <Link className='nav-button' to='/'>news</Link>
        //     <Link className='nav-button' to='/'>resources</Link>
        //     <a className="join-button" href="mailto:cyarar@uab.edu">join us</a>
        // </div>
    )
}

export default NavBar;
