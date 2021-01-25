import React from "react"
import { FaLinkedin, FaInstagram, FaVimeo } from "react-icons/fa"
// import Instagrid from "./instagrid"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="mt-12 bg-gray-100  flex flex-col justify-center items-center w-full h-48">
      <div className="flex flex-col items-center justify-around gap-2 w-full">
        <div className="flex  justify-center ">
          <a href="https://www.youtube.com/">
            <FaLinkedin size={24} className="m-5  text-blue-500" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={24} className="m-5" />
          </a>
          <a href="https://www.vimeo.com">
            <FaVimeo size={24} className="m-5 text-blue-400" />
          </a>
        </div>
        <hr className="border-black h-3 z-10" />
        <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:gap-2 md:px-10">
          <h4>
            Copyright &copy; {new Date().getFullYear()} {siteTitle}
          </h4>
          <a
            href="https://upliftdigitalsolutions.com/"
            target="_blank"
            rel="noreferrer"
          >
            Powered By <span className="underline"> Uplift DS</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
