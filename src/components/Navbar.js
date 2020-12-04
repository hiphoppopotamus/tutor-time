import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar clearfix">
            <div className="navbar-links">
                <img src={Logo} alt="tutor-time-logo" className="logo" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>    
            </div>
        </div>
    )
}

export default withRouter(Navbar)