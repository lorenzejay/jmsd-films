import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import StyledBackgroundSection from "../components/imageHero"
import Layout from "../components/layout"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query Pricing {
      desktop: file(relativePath: { eq: "flowers.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      allPackagesJson {
        nodes {
          id
          title
          price
          details
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  // console.log(data.allPackagesJson.nodes)
  return (
    <Layout>
      <div className="min-h-screen text-black">
        <StyledBackgroundSection
          className=""
          imageSrc={imageData}
          title={"Packages"}
        />
        <p className="leading-relaxed md:w-3/4 my-5 px-5 text-sm md:mx-auto md:mt-20 text-center md:text-2xl">
          Our videography packages are focuses on delivering cinematic wedding
          films that tell a story of your special day. The movies are 3-7
          minutes long (depending on the package selected) and delivered within
          90 days after the wedding date. We will cover your wedding for a
          standard of 8 hours across all packages. If you would like to extend
          us, we would happily arrange that. See below packages specifics.
        </p>

        <div className="text-gray-700 flex flex-col justify-center lg:flex-row md:justify-around py-10 md:mt-24">
          {data.allPackagesJson.nodes.map(item => (
            <div key={item.id} className="text-center my-5">
              <h1 className="font-bold text-3xl uppercase">{item.title}</h1>
              <h6 className=" my-2">{item.price}</h6>
              <hr className="w-1/4 mx-auto border-black mb-3" />
              <ul>
                {item.details.map((item, i) => (
                  <li key={i} className="my-3">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-3">
                <button className="bg-gray-900 rounded px-5 py-1 text-white">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Pricing
