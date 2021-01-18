import React, { useState } from "react"
import styled from "styled-components"

export const Form = styled.form`
  -webkit-appearance: none;
  input,
  textarea {
    -webkit-appearance: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19) !important;
    border-radius: 4px;
    margin-bottom: 15px;
    z-index: 20;
  }
`

// export const DateInput = styled.input`
//   input[type="date"]:before {
//     content: attr(placeholder) !important;
//     color: #aaa;
//     margin-right: 0.5em;
//   }
//   input[type="date"]:focus:before,
//   input[type="date"]:valid:before {
//     content: "";
//   }
// `

const ContactUs = ({ isPage }) => {
  const todayDate = new Date().toISOString().slice(0, 10)
  const [currentDate, setCurrentDate] = useState(todayDate)
  return (
    <Form className="flex flex-col justify-center items-center my-12 w-3/4 mx-auto overflow-visible sm:w-7/12 md:w-4/12">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      {isPage && (
        <h1 className="uppercase text-4xl text-center mb-12">
          We'd love to hear your story
        </h1>
      )}

      <input
        type="text"
        placeholder="Name"
        name="name"
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />

      <label className="mr-auto" htmlFor="date">
        Wedding Date
      </label>
      <input
        type="date"
        value={currentDate}
        onChange={e => setCurrentDate(e.target.value)}
        name="date"
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full"
      />

      <textarea
        rows="5"
        placeholder="Tell us your story"
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />
      <button
        className="bg-gray-700 w-full rounded text-white py-1 uppercase"
        type="submit"
      >
        Submit
      </button>
    </Form>
  )
}

export default ContactUs
