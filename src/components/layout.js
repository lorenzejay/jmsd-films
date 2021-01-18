import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import SideBar from "./sidebar"

const Layout = ({ homePage, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header
        toggle={toggle}
        siteTitle={data.site.siteMetadata?.title || `JMSD Films`}
        homePage={homePage}
      />
      <div>
        <main className="mt-20">{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title || `JMSD Films`} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
