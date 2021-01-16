import React from 'react';
import Layout from '../components/Layout';

const Skills = () => {
    return (
        <Layout>
            <React.Fragment>
    <section className="mySkills mt-5">
        <h1 className="pt-5">I have aquired the below skills</h1>
        <div class="skillSet mt-4">
                <i className="fab fa-html5 fa-3x text-light"></i>
                <i className="fab fa-css3-alt fa-3x text-light"></i>
                <i className="fab fa-js-square fa-3x text-light"></i>
                <i className="fas fa-database fa-3x text-light"></i>
                <i className="fab fa-react fa-3x text-light"></i>
        </div>
        <p></p>

      <h3>I am also learning</h3>
      <div className="futureSkills mt-4">
              <i className="fab fa-node fa-3x text-light mb-4"></i>
              <i className="fab fa-python fa-3x text-light mb-4"></i>
              <i className="fab fa-sass fa-3x text-light mb-4"></i>
      </div>
      <p></p>
    </section>
          </React.Fragment>
        </Layout>
    )
}

export default Skills