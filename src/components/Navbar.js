import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import '../css/Navbar.css';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    return (
        <div className="navbar clearfix">
            <div class="navbar-links">
                <p>Tuttime</p>
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