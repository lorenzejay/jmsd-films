import React from "react"
// Import css files for carouselk
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="my-12 p-5 mb-32">
      <h2 className="text-4xl text-center mb-12">What our clients have said</h2>
      <Slider
        {...settings}
        className="w-5/6 mx-auto text-black border-none box shadow-none outline-none"
      >
        <div>
          <div className="max-w-sm md:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-gray-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                Design Tools
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-gray-700">
                Person 1
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-sm md:max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-gray-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                Design Tools
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-gray-700">
                Person 2
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-sm md:max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-gray-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                Design Tools
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-gray-700">
                Person 3
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonial
