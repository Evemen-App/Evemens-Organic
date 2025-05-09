import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile toggle menu */}
      <details className="md:hidden border-b">
        <summary className="bg-white px-4 py-3 font-semibold cursor-pointer">
          🌿Eve<span className="text-yellow-300">mens</span> Menu
        </summary>
        <Sidebar />
      </details>

      {/* Sidebar + main layout for medium+ screens */}
      <div className="md:flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout