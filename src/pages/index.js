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
          <div class="pAdkins">
              <h1 id="myName"><span class="cust">P</span>eter <span class="cust">A</span>dkins</h1>
              <h3 id="webDev">Front-end Developer</h3>
            </div>
            <div class="introText">
            <div class="row">
                <div class="col-md-6"><i class="fas fa-envelope"><a class="custLink" href="#"> adkins_peter@hotmail.com</a></i></div>
                <div class="col-md-6"><i class="fas fa-mobile-alt"><a class="custLink" href="#"> 07926619158</a></i></div>
              </div>
            </div>
          </React.Fragment>
      </Layout>
  )
}

export default IndexPage
