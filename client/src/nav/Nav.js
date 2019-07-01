import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper" >
                    <div className="container">
                        <ul className="right" >
                            <li><Link to="/login">LOGIN</Link></li>
                            <li><Link to="/">ABOUT</Link></li>
                            <li><Link to="/eduction">EDUCATION</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Nav;