import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const HomeIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pp.JPG" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <div className="my-24">
      <h1 className="text-4xl w-full mt-12 mb-6 text-center tracking-wider uppercase">
        Los Angeles Wedding Filmmaker
      </h1>
      <img
        src={data.file.childImageSharp.fluid.src}
        alt="This is a little about me and who I look like."
        title="Los Angeles Wedding Filmmaker"
        loading="lazy"
        className="mx-auto rounded-full w-52 h-52 object-cover my-7 lg:my-12"
      />
      <p className="px-5 text-xl sm:w-3/4 text-center sm:mx-auto leading-relaxed font-light">
        I was shooting documentary films back in 2010 at our church. On June
        2011, a church member asked if I could capture a wedding. I said, "Let's
        do it.", and the rest is history. Our approach is a little more{" "}
        <span className="italic">timeless </span>
        than some; We create films driven by emotion and aim to capture the
        couple's essence on their special day.
      </p>
    </div>
  )
}

export default HomeIntro
