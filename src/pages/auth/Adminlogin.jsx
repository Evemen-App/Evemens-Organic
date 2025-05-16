import React from 'react'

const Adminlogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-green-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">Admin Login</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Sign in to access the Evemens dashboard
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="admin@evemens.com"
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          &copy; {new Date().getFullYear()} Evemens Organics. All rights reserved.
        </p>
      </div>
    </div>
  );
}

  


export default Adminlogin