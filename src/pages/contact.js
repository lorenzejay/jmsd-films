import React from "react"
import styled from "styled-components"
import ContactUs from "../components/contactUs"
import Layout from "../components/layout"
// import VideoStrip from "../components/videoStrip"
import StyledBackgroundSection from "../components/imageHero"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
export const Form = styled.form`
  -webkit-appearance: none;
  input,
  textarea {
    -webkit-appearance: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19) !important;
    border-radius: 4px;
    margin-bottom: 15px;
    z-index: 20;
  }
`

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title={"Connect With Us | Los Angeles California Wedding Film Studio"}
      />
      <div className="">
        <StyledBackgroundSection
          className=""
          imageSrc={imageData}
          title={"Contact Us"}
        />

        <ContactUs isPage={true} />

        {/* <VideoStrip /> */}
      </div>
    </Layout>
  )
}

export default Contact
