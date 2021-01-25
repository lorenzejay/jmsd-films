import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

export const Overlay = styled.div`
  position: absolute; /* Sit on top of the page content */
  width: auto; /* Full width (cover the whole page) */
  height: auto; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
`

const BackgroundSection = ({ title, imageSrc }) => {
  return (
    <BackgroundImage
      Tag="section"
      className="bg-gray-700 min-h-48 flex flex-col items-center p-10 md:h-72 md:justify-center"
      fluid={imageSrc}
      backgroundColor={`#040e18`}
    >
      <Overlay className="overlay hover:inline-block "></Overlay>
      <h2 className="uppercase text-white text-4xl text-center my-8 font-semibold z-10">
        {title}
      </h2>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
