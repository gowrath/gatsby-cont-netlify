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
          <p>John's Dev Page</p>
          <p>Please view a few of my projects and leave me feedback :)
          </p>
          <p><a href="https://linkedin.com/in/jobang">LinkedIn</a></p>
        </div>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
