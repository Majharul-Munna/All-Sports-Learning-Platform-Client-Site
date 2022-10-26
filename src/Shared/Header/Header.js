import React from 'react';
import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import logo from '../../logo/learn-with-EX-logo.jpg';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Nav className="navbar bg-light">
                <div className="container-fluid">
                <img className=' h-10 w-10 rounded-xl' src={logo} alt="" />
                    <h3 className=" text-3xl text-orange-500">Sport Science</h3>
                    <div>
                        <Nav className="me-auto">
                            <Link className='mx-3' to="/">Home</Link>
                            <Link className='mx-3' to="/courses">Courses</Link>
                            <Link className='mx-3' to="/faq">FAQ</Link>
                            <Link className='mx-3' to="/blog" >Blog</Link>
                            <Link className='mx-3 px-2 text-white rounded-3xl bg-orange-500' to="/login" >LogIn</Link>
                            <p>{user?.displayName}</p>
                        </Nav>
                    </div>

                </div>
            </Nav>
        </div>
    );
};

export default Header;