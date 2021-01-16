import React from 'react';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className="containerStyle container contentStyle">
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout