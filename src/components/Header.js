import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-regular-svg-icons';

const Header = () => {
    return (
        <nav className="topnav" id="myTopnav">
            <div className="table">
                <ul className="navBar">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/skills">skills</Link></li>
                    <li><Link to="/projects">portfolio</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <FontAwesomeIcon icon={faBars} />
                    </a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header