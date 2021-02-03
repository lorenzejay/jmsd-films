import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import AddOns from "../components/addOns"
import StyledBackgroundSection from "../components/imageHero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query Pricing {
      desktop: file(relativePath: { eq: "flowers-min.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      flowers: file(relativePath: { eq: "addon.jpg" }) {
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
          isMostPopular
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  const imageData2 = data.flowers.childImageSharp.fluid
  // console.log(data.allPackagesJson.nodes)
  return (
    <Layout>
      <SEO title="Pricing | Los Angeles Film Studio" />
      <div className="min-h-screen text-black">
        <StyledBackgroundSection
          className=""
          imageSrc={imageData}
          title={"Packages"}
        />
        <p className="leading-relaxed md:w-3/4 my-5 px-5 mt-20 text-sm md:mx-auto md:mt-20 text-center md:text-2xl">
          Our packages focus on delivering cinematic wedding films that tell a
          story of your special day. The movies are up to 3-7 minutes long
          (depending on the package selected) and delivered within 90 days after
          your wedding date. We cover your wedding for a standard of up to 8
          hours across all packages. If you would like to extend us, we will
          happily arrange that. See below packages specifics.
        </p>

        <div className="text-gray-700 flex flex-col justify-center lg:flex-row md:justify-around py-10 md:mt-24">
          {data.allPackagesJson.nodes.map(item => (
            <div key={item.id} className="text-center my-20 lg:my-10">
              <h1 className="font-bold text-3xl uppercase">{item.title}</h1>
              {item.isMostPopular && <p>(Most Popular)</p>}
              <h6 className=" mt-7 tracking-widest text-xl">{item.price}</h6>
              <hr className="w-1/4 mx-auto border-black my-5" />
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

        {/* <div className="bg-gray-500 h-48 w-full"> */}
        <StyledBackgroundSection
          className="h-48 w-full"
          imageSrc={imageData2}
          title={"Add-Ons"}
        />
        {/* </div> */}
        <AddOns />
      </div>
    </Layout>
  )
}

export default Pricing
