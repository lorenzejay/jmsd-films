import React from "react"
import ContactUs from "../components/contactUs"
import HomeIntro from "../components/homeIntro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonial from "../components/testimonial"
import VideoGallery from "../components/videoGallery"
import VideoHero from "../components/videoHero"
import VideoStrip from "../components/videoStrip"

const IndexPage = () => (
  <Layout homePage={true}>
    <SEO
      title="Los Angeles California Wedding Film Studio | JMSD Films"
      description={
        "Los Angeles Wedding Video studio. We create films driven by emotion and aim to capture the couple's essence on their special day."
      }
    />
    <VideoHero />
    <HomeIntro />
    <VideoGallery />
    <VideoStrip />
    <Testimonial />
    <ContactUs isPage={false} />
  </Layout>
)

export default IndexPage
