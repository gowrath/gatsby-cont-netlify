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
          <p>Here are a few of my projects. I have included a description in the post itself.
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
