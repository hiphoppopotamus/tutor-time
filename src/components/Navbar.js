import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        // if (active) {
        //     document.body.style.paddingTop = "250px";
        // } else {
        //     document.body.style.paddingTop = "50px";
        // }
    });
    return (
        <nav className={`navbar-container clearfix ${ active ? "" : "navbar-list-active" }`}>
            {/* <div className="navbar-links"> */}
            <Link to="/" className="navbar-header-link">
                <img src={Logo} alt="tutor-time-logo" className="header-logo" />
                <p className="header-title">Tutor Time</p>
            </Link>

            <div className={`hamburger-nav ${ active ? "hamburger-bar-active" : "" }`} onClick={() => setActive(!active)}>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
            </div>
            
            <div className="navbar-list">
                <Link to="/" className="navbar-list-link">Home</Link>
                <NavLink to="/Dashboard" className="navbar-list-link">Dashboard</NavLink>
                <NavLink to="/contact" className="navbar-list-link">Contact</NavLink>
            {/* </div> */}
            </div>

            
            {/* <Link to="/" className="hamburger-links">Home</Link>
            <Link to="/Dashboard" className="hamburger-links">Dashboard</Link>
            <Link to="/Contact" className="hamburger-links">Contact</Link> */}


            
        {/* <div className="navbar-container clearfix"> */}
            {/* <div className="navbar-links"> */}
                {/* <Link to="/"> */}
                    {/* <img src={Logo} alt="tutor-time-logo" className="header-logo" /> */}
                    {/* <p className="header-title">Tutor Time</p> */}
                {/* </Link> */}
                {/* <nav> */}
                    {/* <ul> */}
                        {/* <li><Link to="/">Home</Link></li> */}
                        {/* <li><NavLink to="/Dashboard">Dashboard</NavLink></li> */}
                        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                    {/* </ul> */}
                {/* </nav>     */}
            {/* </div> */}
        {/* </div> */}
        </nav>
        
    )
}

export default withRouter(Navbar)