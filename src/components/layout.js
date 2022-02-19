import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <div className="center">
          <p>John's Portfolio Page</p>
          <p>Here are a few of my projects. This blog uses Contentful hooks along with Netlify to auto-deploy changes to the CMS. Gatsby/React is the frontend and GraphQL is used to query Contentful. 
          </p>
          <p><b><a href="https://linkedin.com/in/jobang">LinkedIn</a></b></p>
          <p><b><a href="https://github.com/gowrath">Github</a></b></p>
        </div>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
