import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <nav className="topnav" id="myTopnav">
            <div className="table">
                <ul className="navBar hideNav">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/skills">skills</Link></li>
                    <li><Link to="/projects">portfolio</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header