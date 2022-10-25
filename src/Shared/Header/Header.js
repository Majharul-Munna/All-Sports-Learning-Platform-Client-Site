import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../logo/learn-with-EX-logo.jpg';

const Header = () => {
    return (
        <div>
            <Nav className="navbar bg-light">
                <div className="container-fluid">
                <img className=' h-10 w-10 rounded-xl' src={logo} alt="" />
                    <h3 className=" text-3xl text-orange-500">Learn with EX-</h3>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#courses">Courses</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                        </Nav>
                    </div>

                </div>
            </Nav>
        </div>
    );
};

export default Header;