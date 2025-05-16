// import React from 'react'
// import { NavLink } from "react-router-dom";
// import { LayoutDashboard, PlusCircle, Package, User, LogOut } from "lucide-react";

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-600 border-r w-full md:w-64 h-screen p-4">
//     {/* Logo */}
//     <div className="mb-8 flex items-center justify-center">
//       <p className="italic text-xl font-bold">
//         🌿Eve<span className="text-yellow-300">mens</span>
//       </p>
//     </div>

//     {/* Navigation */}
//     <nav className="space-y-2">
//       <NavLink
//         to="/dashboard"
//         className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
//       >
//         <LayoutDashboard size={18} /> Overview
//       </NavLink>

//       <NavLink
//         to="/dashboard/adproduct"
//         className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
//       >
//         <PlusCircle size={18} /> Add Product
//       </NavLink>

//       <NavLink
//         to="/dashboard/allproduct"
//         className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
//       >
//         <Package size={18} /> All Products
//       </NavLink>
//     </nav>

//     {/* Footer Links */}
//     <div className="mt-10 border-t pt-4 space-y-2">
//       <NavLink
//         to="/dashboard/profile"
//         className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100"
//       >
//         <User size={18} /> Profile
//       </NavLink>

//       <a
//         href="#"
//         className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 rounded hover:bg-red-50"
//       >
//         <LogOut size={18} /> Logout
//       </a>
//     </div>
//   </div>

//   )
// }

// export default Sidebar


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, PlusCircle, Package, ShoppingCart, FileText, User, LogOut, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-700 p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`bg-gray-600 border-r md:w-64 w-64 h-screen p-4 flex flex-col fixed z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <p className="italic text-xl font-bold text-white">
            🌿Eve<span className="text-yellow-300">mens</span>
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavLink to="/" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <Home size={18} /> Home
          </NavLink>

          <NavLink to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <LayoutDashboard size={18} /> Overview
          </NavLink>

          <NavLink to="/dashboard/allproduct" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <Package size={18} /> All Products
          </NavLink>

          <NavLink to="/dashboard/adproduct" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <PlusCircle size={18} /> Add Product
          </NavLink>

          

          <NavLink to="/dashboard/cart" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <ShoppingCart size={18} /> Cart
          </NavLink>

          <NavLink to="/blog" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <FileText size={18} /> Blog
          </NavLink>
        </nav>

        {/* Footer Links */}
        <div className="mt-auto border-t border-gray-500 pt-4 space-y-2">
          <NavLink to="/dashboard/profile" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded text-white hover:bg-gray-500">
            <User size={18} /> Profile
          </NavLink>

          <NavLink to="#" className="flex items-center gap-2 px-4 py-2 text-sm text-red-300 font-medium rounded hover:bg-red-900 hover:text-red-100">
            <LogOut size={18} /> Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;





