import React from "react"
// Import css files for carouselk
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query Testimonials {
      allTestimonialsJson {
        edges {
          node {
            id
            author
            text
            location
          }
        }
      }
    }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="my-12 p-5 mb-32 ">
      <h2 className="text-4xl text-center mb-2">What our clients have said</h2>
      <Slider
        {...settings}
        className="w-5/6 mx-auto text-black border-none box shadow-none outline-none"
      >
        {data.allTestimonialsJson.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <div className="max-w-sm md:max-w-md py-4 px-8 bg-white  rounded-lg my-20 mx-auto">
                <div>
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    {node.location}
                  </h2>
                  <p className="mt-2 text-gray-600">{node.text}</p>
                </div>
                <div className="flex justify-end mt-4">
                  <p className="text-xl font-medium text-gray-700">
                    {node.author}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Testimonial
