import React from "react"
import styled from "styled-components"
import ContactUs from "../components/contactUs"
import Layout from "../components/layout"
import VideoStrip from "../components/videoStrip"
import StyledBackgroundSection from "../components/imageHero"
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
  return (
    <Layout>
      <div className="">
        <StyledBackgroundSection className="" />
        <div>
          <h3 className="text-center my-12 text-3xl px-5">
            We love to hear your story
          </h3>
        </div>
        <ContactUs className="" />

        {/* <VideoStrip /> */}
      </div>
    </Layout>
  )
}

export default Contact
