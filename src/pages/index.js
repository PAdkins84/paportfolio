import * as React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../styles/style.css'
import Layout from '../components/Layout'

library.add(fab)

// markup
const IndexPage = () => {
  return (
      <Layout>
        <React.Fragment>
          <div className="row">
            <div className="introText col-md-12">
                <h1 className="myName"><span className="cust">P</span>eter <span className="cust">A</span>dkins</h1>
                <h3>Front-End Developer</h3>
                <span className="col-sm-6"><i className="fas fa-envelope mr-1"></i><a className="custLink" href="https://padkins.dev">adkins_peter@hotmail.com</a></span>
                <span className="col-sm-6"><i className="fas fa-mobile-alt mr-1"></i><a className="custLink" href="https://padkins.dev">07926619158</a></span>
                <hr />
            </div>
          </div>
          </React.Fragment>
      </Layout>
  )
}

export default IndexPage
