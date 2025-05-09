import React from 'react'
import { Link } from 'react-router'
import { Users, Package, ShoppingBag, Activity, DollarSign  } from "lucide-react";


const Overview = () => {
  return (
   
    <div className="p-4 space-y-6">
    <h1 className="text-2xl font-bold">Dashboard Overview</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-sm text-gray-500">Total Users</h2>
        <p className="text-2xl font-bold">120</p>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-sm text-gray-500">Total Products</h2>
        <p className="text-2xl font-bold">75</p>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-sm text-gray-500">Orders</h2>
        <p className="text-2xl font-bold">310</p>
      </div>
    </div>

    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>User Zee added a new product.</li>
        <li>Order #1234 was placed.</li>
        <li>3 new users registered.</li>
      </ul>
    </div>
  </div>



  )
}

export default Overview