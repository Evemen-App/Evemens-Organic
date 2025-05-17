import React from 'react'

const DashboardView = () => {
  return (
      
   
   
  //   <div className="p-4 space-y-6">
  //   <h1 className="text-2xl font-bold">Dashboard Overview</h1>

  //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //     <div className="bg-white rounded shadow p-4">
  //       <h2 className="text-sm text-gray-500">Total Users</h2>
  //       <p className="text-2xl font-bold">120</p>
  //     </div>

  //     <div className="bg-white rounded shadow p-4">
  //       <h2 className="text-sm text-gray-500">Total Products</h2>
  //       <p className="text-2xl font-bold">75</p>
  //     </div>

  //     <div className="bg-white rounded shadow p-4">
  //       <h2 className="text-sm text-gray-500">Orders</h2>
  //       <p className="text-2xl font-bold">310</p>
  //     </div>
  //   </div>

  //   <div className="bg-white rounded shadow p-4">
  //     <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
  //     <ul className="text-sm text-gray-600 space-y-2">
  //       <li>User Zee added a new product.</li>
  //       <li>Order #1234 was placed.</li>
  //       <li>3 new users registered.</li>
  //     </ul>
  //   </div>
  // </div>

 <div className="p-4 md:ml-64 min-h-screen bg-gray-50">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">Dashboard Overview</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Manage Cart</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">12</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Recent Orders</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">8</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Pending Approvals</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">5</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Approved Requests</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">20</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✓ Product "Shea Butter Cream" added successfully</li>
          <li>✓ Order #12345 marked as approved</li>
          <li>✓ Product "Charcoal Soap" updated</li>
          <li>✓ Pending request from client John Doe</li>
        </ul>
      </div>
    </div>

  )
  
  
}

export default DashboardView
