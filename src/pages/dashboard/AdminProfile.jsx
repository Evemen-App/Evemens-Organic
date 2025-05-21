import React from "react";
import  { useState } from "react";

const AdminProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowPasswordForm(false);
  };

  return (
    <div className="min-h-screen bg-lime-50 p-6 flex items-center justify-center">
      {!isLoggedIn ? (
        // Login Form
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Log In
            </button>
          </form>
        </div>
      ) : (
        // Profile Section
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-6">
          <div className="text-3xl font-bold text-green-900 mb-6 text-center">
            Admin Profile
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Admin"
              className="w-40 h-40 rounded-full border-4 border-green-300 object-cover"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">
                Queen Zee 👑
              </h2>
              <p className="text-gray-700 mb-4">
                Founder & Admin of SheaGlow — an organic beauty brand crafting
                premium shea butter products for naturally radiant skin.
              </p>

              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>Email:</strong> queenzee@sheaglow.com
                </p>
                <p>
                  <strong>Role:</strong> Site Administrator
                </p>
                <p>
                  <strong>Location:</strong> Accra, Ghana
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowPasswordForm(true)}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition"
                >
                  Change Password
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Change Password Form */}
          {showPasswordForm && (
            <div className="mt-8 bg-gray-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Change Password
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Update Password
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
