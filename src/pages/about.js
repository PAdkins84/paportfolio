import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <React.Fragment>
            <div className="aboutMe col-md-12">
            <h1 className="about"><span className="cust">A</span>bout <span className="cust">M</span>e</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="aboutBtn">
            <button type="button" className="btn btn-outline-primary mr-3 mt-3">My Portfolio</button><button type="button" className="btn btn-outline-primary ml-3 mt-3">Download my CV</button>
            </div>
          </React.Fragment>
        </Layout>
    )
}

export default About