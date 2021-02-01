import React from "react"
import styled from "styled-components"
import videoSrc from "../videos/superhero.mp4"
export const Hero = styled.section`
  height: 65vh;
  width: 100%;
`

const VideoHero = () => {
  return (
    <Hero className="flex flex-col items-center text-white object-contain pb-0 mb-0 bg-black">
      <video
        style={{ zIndex: "2" }}
        className="object-cover h-full w-full relative"
        src={videoSrc}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-1/3 mt-20 left-0 z-10 w-full m-auto text-center px-3">
        <h1 className="text-2xl lg:text-4xl uppercase mb-20 font-semi-bold lg:w-3/4 mx-auto">
          Let us capture your love through our passion of storytelling.
        </h1>
      </div>
    </Hero>
  )
}

export default VideoHero
