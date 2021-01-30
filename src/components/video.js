import React from "react"
import styled from "styled-components"

export const EmbededContainer = styled.div`
  position: relative;
  padding-top: 56%;

  overflow: hidden;
  width: 100%;
`

const Video = ({ videoSrc, title }) => {
  return (
    <EmbededContainer className="w-full relative my-5 flex items-center justify-center text-center">
      <iframe
        style={{
          background: "#fff",
          position: "absolute",
          top: 0,
          margin: "0 auto",
          width: "100%",
          height: "100%",
        }}
        title={title}
        src={videoSrc}
        allow="autoplay; encrypted-media; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </EmbededContainer>
  )
}

export default Video
