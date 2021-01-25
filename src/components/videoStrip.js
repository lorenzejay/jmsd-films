import React from "react"
import DroneShot from "../videos/DroneFootage.mp4"
const VideoStrip = () => {
  return (
    <div className="videostrip w-full h-28 p-0 mx-0 my-20 sm:h-36">
      <video
        style={{ zIndex: "-1" }}
        className="object-cover w-full h-full relative "
        src={DroneShot}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default VideoStrip
