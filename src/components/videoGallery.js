import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Video from "./video"

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
      <h2 className="text-4xl mb-20 text-center">Movies</h2>
      {/* <div style={{ padding: "42.19% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/494044529?title=0&byline=0&portrait=0"
          style={{position:"absolute",top:"0",left:'0';width:100%;height:100%;}}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
      <script src="https://player.vimeo.com/api/player.js"></script>
      <div className="mt-2 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-4">
        {data.allVideosJson.edges.map(({ node }) => (
          <Video videoSrc={node.videoSrc} title={node.title} key={node.id} />
        ))}
        {/* <Video
          videoSrc="https://player.vimeo.com/video/380106142?title=0&byline=0&portrait=0"
          title="Anna + Brian"
        />
        <Video
          videoSrc="https://player.vimeo.com/video/384598339?title=0&byline=0&portrait=0"
          title="Reneice + Daniele"
        />
        <Video
          videoSrc="https://player.vimeo.com/video/384598339?title=0&byline=0&portrait=0"
          title="Reneice + Daniele"
        /> */}
      </div>
    </div>
  )
}

export default VideoGallery
