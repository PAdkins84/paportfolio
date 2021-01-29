import React from 'react';
import Layout from '../components/Layout';
import * as FaIcons from 'react-icons/fa';

const Skills = () => {
    return (
        <Layout>
            <React.Fragment>
                <section className="mySkills mt-5">
                    <div class="skillSet mt-4">
                        <span className="mr-1"><FaIcons.FaHtml5 size={50} /></span>
                        <span className="mr-1"><FaIcons.FaCss3Alt size={50} /></span>
                        <span className="mr-1"><FaIcons.FaJsSquare size={50} /></span>
                        <span className="mr-1"><FaIcons.FaDatabase size={50} /></span>
                        <span className="mr-1"><FaIcons.FaReact size={50} /></span>
                        <span className="mr-1"><FaIcons.FaSass size={50} /></span>
                        <span className="mr-1"><FaIcons.FaWordpress size={50} /></span>
                    </div>
                <p></p>
                </section>
          </React.Fragment>
        </Layout>
    )
}

export default Skills