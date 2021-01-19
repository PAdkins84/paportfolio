import React from 'react';
import { Link } from 'gatsby';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
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
    return (
        <div className="containerStyle container contentStyle">
            <Link to="/"><img class="logo" src={require('../images/icon.png')} /></Link>
            <div onClick={dayNightMode} class="toggle"></div>
            <Particles
                className="particles"
                params={particleOptions} />
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout