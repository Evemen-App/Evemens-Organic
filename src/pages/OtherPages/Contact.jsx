import React from 'react'

const Contact = () => {
  return (
   

    <div className="p-8">
    <h1 className="text-3xl font-bold mb-4 text-center">CONTACT US</h1>
  
    <p className="text-center mb-10">
      We'd love to hear from you. Whether you're interested in our wholesale or retail,
      feel free to reach out.
    </p>
  
    <div className="flex flex-col md:flex-row gap-10">
      {/* Left - Contact Info */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="mb-4">
          <p className="font-medium"> 📞Telephone</p>
          <p>054 610 5468</p>
        </div>
        <div className="mb-4">
          <p className="font-medium"> 📧 Email</p>
          <p> ayesuaama78@gmail.com</p>
        </div>
        <div className="mb-4">
          <p className="font-medium"> Facebook</p>
          <p>Evemens Organic Product</p>
        </div>
      </div>
  
      {/* Right - Form */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-300 hover:bg-green-700 text-black px-6 py-2 rounded-md font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
  

  )
}

export default Contact