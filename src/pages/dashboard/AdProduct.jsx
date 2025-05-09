import React from 'react'

const AdProduct = () => {
  return (
   
<div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-[#2F3624] mb-6">Add Product</h2>

        <form className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter product title"
            />
          </div>

          {/* Price per Box */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per Box (GHS)
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="600"
            />
          </div>

          {/* Price per Item */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per Item (GHS)
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="25"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Write product description..."
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0 file:text-sm file:font-semibold
              file:bg-[#2F3624] file:text-white hover:file:bg-[#3e472f]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#2F3624] text-white py-2 px-4 rounded hover:bg-[#3e472f] transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AdProduct