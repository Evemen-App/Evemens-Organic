import React from 'react'
import { Phone, Mail, Facebook, Instagram, User, MailCheck, User2, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
  
      {/* Section 1: Logo */}
      <div className="flex items-center">
      <img src="logo" alt="Logo" />
    </div>
  
      {/* Section 2: Contact Info */}
      <div className="space-y-4 text-sm">
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-green-400" />
          <span>+1 (234) 567-890</span>
        </div>
        <div className="flex items-center space-x-2">
          <MailCheck className="h-4 w-4 text-blue-400" />
          <span>info@example.com</span>
        </div>
        <div className="flex space-x-4 pt-2">
          {/* <Instagram className="hover:text-gray-900" size={20} /> */}
          <User2 />
          {/* <Facebook className="hover:text-gray-900" size={20} /> */}
          <Linkedin className="hover:text-gray-900" size={20} />
        </div>
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
            className="bg-yellow-300 hover:bg-green-700 text-black px-4 py-2 rounded-md font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
      <hr className='border-black'/>
      <p className='italic items-center'>copyright@ evemens organic product 2025 . allrights reserved</p>
  </footer>
  )
}

export default Footer