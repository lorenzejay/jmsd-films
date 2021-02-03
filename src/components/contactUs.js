import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

export const Form = styled.form`
  -webkit-appearance: none;
  input,
  select,
  textarea {
    width: 100%;
    -webkit-appearance: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19) !important;
    border-radius: 4px;
    margin-bottom: 15px;
    z-index: 20;
  }
`

const ContactUs = () => {
  const todayDate = new Date().toISOString().slice(0, 10)
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: todayDate,
    location: "",
    package: "Video",
    message: "",
    instagram: "",
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: "",
        email: "",
        phoneNumber: "",
        date: todayDate,
        location: "",
        package: "Video",
        message: "",
        instagram: "",
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: "POST",
      url: "https://formspree.io/f/xyybvkbw",
      data: inputs,
    })
      .then(response => {
        handleServerResponse(
          true,
          "Thank you for submitting. We will get back to you soon."
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  // console.log(inputs)
  // // const [currentDate, setCurrentDate] = useState(todayDate)
  // // const [name, setName] = useState("")
  // // const [email, setEmail] = useState("")
  // // const [phoneNumber, setPhoneNumber] = useState("")
  // // const [location, setLocation] = useState("")
  // // const [package, setPackage] = useState("Video")
  // // const [instagram, setInstagram] = useState("")
  return (
    <Form
      className="flex flex-col justify-center items-center my-12 w-3/4 mx-auto overflow-visible sm:w-7/12 md:w-4/12"
      onSubmit={handleOnSubmit}
    >
      {
        <>
          <h1 className="uppercase text-4xl text-center mb-12">Say Hello</h1>
          <p className="mb-5">
            If you don't hear from us during the weekend, do not worry. We're
            just out and about covering a wedding. We'll get back to you on
            Monday! Promise! If you need to reach us via email:{" "}
            <a href="mailto:johnmark@jmsdfilms.com">johnmark@jmsdfilms.com</a>
          </p>
        </>
      }

      <input
        type="text"
        placeholder="Couple's Full Name"
        name="name"
        id="name"
        required
        value={inputs.name}
        onChange={handleOnChange}
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />

      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        required
        value={inputs.email}
        onChange={handleOnChange}
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />
      <input
        type="text"
        placeholder="Phone Number"
        required
        name="phoneNumber"
        id="phoneNumber"
        value={inputs.phoneNumber}
        onChange={handleOnChange}
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />

      <label className="mr-auto" htmlFor="date">
        Wedding Date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={handleOnChange}
        value={inputs.date}
        required
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full"
      />

      <input
        type="text"
        placeholder="Location"
        name="location"
        id="location"
        required
        value={inputs.location}
        onChange={handleOnChange}
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      />
      <label htmlFor="package" className="mr-auto">
        Choose a package:
      </label>

      <select
        name="package"
        id="package"
        required
        value={inputs.package}
        onChange={handleOnChange}
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
      >
        <option value="Video">Video</option>
        <option value="Indie">Indie</option>
        <option value="Cine - 4k">Cine - 4k</option>
        <option value="Hollywood - 4k">Hollywood - 4k</option>
      </select>

      <textarea
        rows="5"
        placeholder="Tell us your story"
        required
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full "
        name="message"
        id="message"
        value={inputs.message}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="instagram"
        id="instagram"
        placeholder="Instagram"
        value={inputs.instagram}
        onChange={handleOnChange}
        className="px-3 py-3 placeholder-gray-800 text-gray-700 relative bg-white text-sm outline-none focus:outline-none  w-full"
      />
      <button
        className="bg-gray-900 w-full rounded text-white py-1 uppercase"
        type="submit"
        disabled={status.submitting}
      >
        {!status.submitting
          ? !status.submitted
            ? "Submit"
            : "Submitted"
          : "Submitting..."}
      </button>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </Form>
  )
}

export default ContactUs
