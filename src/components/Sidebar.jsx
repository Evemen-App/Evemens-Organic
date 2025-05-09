import React from 'react'
import { NavLink } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Package, User, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 border-r w-full md:w-64 h-screen p-4">
    {/* Logo */}
    <div className="mb-8 flex items-center justify-center">
      <p className="italic text-xl font-bold">
        🌿Eve<span className="text-yellow-300">mens</span>
      </p>
    </div>

    {/* Navigation */}
    <nav className="space-y-2">
      <NavLink
        to="/dashboard"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
      >
        <LayoutDashboard size={18} /> Overview
      </NavLink>

      <NavLink
        to="/dashboard/adproduct"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
      >
        <PlusCircle size={18} /> Add Product
      </NavLink>

      <NavLink
        to="/dashboard/allproduct"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
      >
        <Package size={18} /> All Products
      </NavLink>
    </nav>

    {/* Footer Links */}
    <div className="mt-10 border-t pt-4 space-y-2">
      <NavLink
        to="/dashboard/profile"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
      >
        <User size={18} /> Profile
      </NavLink>

      <a
        href="#"
        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 rounded hover:bg-red-50"
      >
        <LogOut size={18} /> Logout
      </a>
    </div>
  </div>

  )
}

export default Sidebar