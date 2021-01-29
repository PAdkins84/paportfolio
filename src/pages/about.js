import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <React.Fragment>
            <div className="aboutMe col-md-12">
            <h1 className="about"><span className="cust">A</span>bout <span className="cust">M</span>e</h1>
            <p className="mt-4">I started off learning Web development myself by taking courses on Udemy as I have always been interested in this and in hope that I could start a new career which differs significantly from what I have been doing over the past decade. I came across an online learning platform called OpenClassrooms which I completed the Front-end developer path to achieve a Bachelors level diploma. The front-end developer path is just the start of hopefully a long journey of learning. I am always interested in learning new skills.</p>
            <p className="mt-4">I also enjoy music production and graphic design and I am familiar with software such as Logic Pro, Affinity designer, Affinity photo and also Adobe Photoshop and After Effects. These skills have been more for personal enjoyment rather than a career goal, but if they can assist in any future projects then this would interest me.</p>
            </div>
            <div className="aboutBtn">
            <Link to="/projects"><button type="button" className="btn btn-outline-primary mr-3 mt-3">My Portfolio</button></Link><a href="https://www.padkins.dev/PA-CV.pdf"><button type="button" className="btn btn-outline-primary ml-3 mt-3">Download my CV</button></a>
            </div>
          </React.Fragment>
        </Layout>
    )
}

export default About