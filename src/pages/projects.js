import React from 'react';
import Layout from '../components/Layout';

const Projects = () => {
    return (
        <Layout>
            <React.Fragment>
            <section className="projects mt-5 container">
                <div className="item">
                    <a href="https://padkins.dev">
                    <img className="proj" src={require('../images/squareOff.png')} alt="Square Off Game" />
                    <a href="https://padkins.dev" class="btn-light">
                        <i className="fas fa-eye"></i> View Project
                    </a>
                    <a href="https://padkins.dev" className="btn-dark">
                        <i className="fab fa-github"></i> View Code
                    </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://padkins.dev">
                    <img className="proj" src={require('../images/quote.png')} alt="Square Off Game" />
                    <a href="https://padkins.dev" className="btn-light">
                        <i className="fas fa-eye"></i> View Project
                    </a>
                    <a href="https://padkins.dev" className="btn-dark">
                        <i className="fab fa-github"></i> View Code
                    </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://padkins.dev">
                    <img className="proj" src={require('../images/bff.png')} alt="Square Off Game" />
                    <a href="https://padkins.dev" className="btn-light">
                        <i className="fas fa-eye"></i> View Project
                    </a>
                    <a href="https://padkins.dev" className="btn-dark">
                        <i className="fab fa-github"></i> View Code
                    </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://padkins.dev">
                    <img className="proj" src={require('../images/candc.png')} alt="Chalets and Caviar" />
                    <a href="https://padkins.dev" class="btn-light">
                        <i className="fas fa-eye"></i> View Project
                    </a>
                    <a href="https://padkins.dev" className="btn-dark">
                        <i className="fab fa-github"></i> View Code
                    </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://padkins.dev">
                    <img className="proj" src={require('../images/bff.png')} alt="Square Off Game" />
                    <a href="https://padkins.dev" className="btn-light">
                        <i className="fas fa-eye"></i> View Project
                    </a>
                    <a href="https://padkins.dev" className="btn-dark">
                        <i className="fab fa-github"></i> View Code
                    </a>
                    </a>
                </div>
                <div className="item">
                    <a href="https://padkins.dev">
                    <img className="proj" src={require('../images/squareOff.png')} alt="Square Off Game" />
                    <a href="https://padkins.dev" className="btn-light">
                        <i className="fas fa-eye"></i> View Project
                    </a>
                    <a href="https://padkins.dev" className="btn-dark">
                        <i className="fab fa-github"></i> View Code
                    </a>
                    </a>
                </div>
            </section>

            <section className="downloadCV mt-5">
                <h1><a className="dlLink" href="https://padkins.dev"><i class="fas fa-cloud-download-alt"></i>Download my CV</a></h1>
            </section>
          </React.Fragment>
        </Layout>
    )
}

export default Projects