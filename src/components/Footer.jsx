import React from 'react'
import { Link } from 'react-router'


const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
  
      {/* Section 1: Logo */}
      <div className="flex flex-col items-center">
      <p className="italic mb-5 text-xl">🌿Eve<span className="text-yellow-300">mens</span></p>
      <div className="flex items-center space-x-2 mb-4">
        <p className="font-medium"> 📞Telephone</p>
        <p>054 610 5468</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
        <p className="font-medium"> 📧 Email</p>
        <p> ayesuaama78@gmail.com</p>
        </div>
        <div className="flex space-x-4 pt-2">
        <p className="font-medium"> Facebook</p>
        <p>Evemens Organic Product</p>
        </div>

        <div className="flex space-x-4 pt-2">
            <p className="font-medium"> Working Hours</p>
            <p>Always Open</p>
          </div>
    </div>
  
      {/* Section 2: Contact Info */}
      <div className="space-y-4 text-sm">
        <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
        <ul className="space-y-2 text-white items-center">
    <li>
      <Link to="/" className="hover:text-[#2F3624] transition-colors duration-300 ">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-[#2F3624] transition-colors duration-300">
        About
      </Link>
    </li>
    <li>
      <Link to="/product-details" className="hover:text-[#2F3624] transition-colors duration-300">
        Product 
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-[#2F3624] transition-colors duration-300">
        Contact
      </Link>
    </li>
  </ul>
      </div>
  
      {/* Section 3: Get In Touch Form */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-300 text-black border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-300 text-black border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 bg-gray-300 text-black border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 bg-gray-300 text-black border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
      <hr className='border-black'/>
      <p className='italic text-center items-center'>copyright@ evemens organic product 2025 . allrights reserved</p>
  </footer>
  )
}

export default Footer