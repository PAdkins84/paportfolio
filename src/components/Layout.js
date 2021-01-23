import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-regular-svg-icons';
import Header from './Header';
import Footer from './Footer';

const dayNightMode = () => {
    let toggleDayNight = document.querySelector('.toggle');
    toggleDayNight.classList.toggle('active');
    console.log(toggleDayNight.classList)
}

const particleOptions = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

const Layout = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                            <li className="nav-text">
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/about">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/skills">
                                    <span>Skills</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/projects">
                                    <span>Portfolio</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/contact">
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/blog">
                                    <span>Blog</span>
                                </Link>
                            </li>    
                </ul>
            </nav>

        <div className="containerStyle container contentStyle">
            {/* <a className="menuIcon"><FontAwesomeIcon icon={faBars} /></a> */}
            <Link to="/"><img class="logo" src={require('../images/icon.png')} /></Link>
            <div onClick={dayNightMode} class="toggle"></div>
            <Particles
                className="particles"
                params={particleOptions} />
            <Header />
                {props.children}
            <Footer />
        </div>
        </>
    )
}

export default Layout