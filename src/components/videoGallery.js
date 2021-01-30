import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Video from "./video"
import styled from "styled-components"

export const VideoGrid = styled.div`
  @media screen and (min-width: 1024px) {
    div:first-child {
      width: 1000px;
      height: 350px;
      grid-column: span 1;
      grid-column: 1 / -1 !important;
      margin: 0 auto;
      padding: 0;
    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
    div:first-child {
      width: 1500px;
      height: 700px;
    }
  }
`

const VideoGallery = () => {
  const data = useStaticQuery(graphql`
    query Videos {
      allVideosJson {
        edges {
          node {
            id
            videoSrc
            title
          }
        }
      }
    }
  `)
  // console.log(data.allVideosJson.edges)
  return (
    <div className="w-full p-4">
      <h2 className="text-4xl mb-20 lg:mb-10 text-center">Movies</h2>

      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
      <VideoGrid className="mt-2 flex flex-col items-center justify-center gap-4 md:first:">
        {data.allVideosJson.edges.map(({ node }) => (
          <Video
            className="item"
            videoSrc={node.videoSrc}
            title={node.title}
            key={node.id}
            id={node.id}
          />
        ))}
      </VideoGrid>
    </div>
  )
}

export default VideoGallery
