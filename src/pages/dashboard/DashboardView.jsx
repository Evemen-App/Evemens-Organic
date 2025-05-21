import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"; // Use this only if routing is enabled

// const DashboardView = () => {
//   return (
      
//  <div className="p-4 md:ml-64 min-h-screen bg-gray-50">
//       <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">Dashboard Overview</h1>

//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
//           <h2 className="text-lg font-semibold text-gray-700">Manage Cart</h2>
//           <p className="text-2xl font-bold text-yellow-500 mt-2">12</p>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
//           <h2 className="text-lg font-semibold text-gray-700">Recent Orders</h2>
//           <p className="text-2xl font-bold text-yellow-500 mt-2">8</p>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
//           <h2 className="text-lg font-semibold text-gray-700">Pending Approvals</h2>
//           <p className="text-2xl font-bold text-yellow-500 mt-2">5</p>
//         </div>

//         <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
//           <h2 className="text-lg font-semibold text-gray-700">Approved Requests</h2>
//           <p className="text-2xl font-bold text-yellow-500 mt-2">20</p>
//         </div>
//       </div>

//       {/* Recent Activity Section */}
//       <div className="bg-white rounded-xl shadow p-6">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
//         <ul className="space-y-2 text-sm text-gray-600">
//           <li>✓ Product "Shea Butter Cream" added successfully</li>
//           <li>✓ Order #12345 marked as approved</li>
//           <li>✓ Product "Charcoal Soap" updated</li>
//           <li>✓ Pending request from client John Doe</li>
//         </ul>
//       </div>
//     </div>




const DashboardView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Log In
            </button>
          </form>
        </div>
      ) : (
        <div className="md:ml-64 p-4">

           <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-900">
            Welcome To AdminDashboard
          </h1>
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <Link
              to="/dashboard/allproduct"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              All Products
            </Link>
          </div>

         

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Manage Cart
              </h2>
              <p className="text-2xl font-bold text-yellow-500 mt-2">12</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Recent Orders
              </h2>
              <p className="text-2xl font-bold text-yellow-500 mt-2">8</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Pending Approvals
              </h2>
              <p className="text-2xl font-bold text-yellow-500 mt-2">5</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Approved Requests
              </h2>
              <p className="text-2xl font-bold text-yellow-500 mt-2">20</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Manage Blog
              </h2>
              <p className="text-2xl font-bold text-yellow-500 mt-2">12</p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Recent Activity
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Product "Shea Butter Cream" added successfully</li>
              <li>✓ Order #12345 marked as approved</li>
              <li>✓ Product "Charcoal Soap" updated</li>
              <li>✓ Pending request from client John Doe</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardView;


