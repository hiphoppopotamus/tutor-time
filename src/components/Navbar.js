import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar-container clearfix">
            <div className="navbar-links">
                <Link to="/">
                    <img src={Logo} alt="tutor-time-logo" className="header-logo" />
                    <p className="header-title">Tutor Time</p>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>    
            </div>
        </div>
    )
}

export default withRouter(Navbar)