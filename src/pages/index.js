import * as React from "react"
import '../styles/style.css'
import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
      <Layout>
        <React.Fragment>
            <div className="introText col-md-12">
                <h1 className="myName"><span className="cust">P</span>eter <span className="cust">A</span>dkins</h1>
                <h3>Front-End Developer</h3>
                <span className="col-sm-6"><i className="fas fa-envelope"></i><a className="custLink" href="#">adkins_peter@hotmail.com</a></span>
                <span className="col-sm-6"><i className="fas fa-mobile-alt"></i><a className="custLink" href="#">07926619158</a></span>
                <hr />
            </div>
          </React.Fragment>
      </Layout>
  )
}

export default IndexPage
