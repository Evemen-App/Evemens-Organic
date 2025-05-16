import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    // <nav className='flex justify-between items-center italic bg-green-950 p-4 '> 
    //     <p> 🌿Eve<span className='italic text-yellow-300'>mens </span></p>

    //     <ul className='flex font-bold gap-20 p-3 text-white'>
    //       <NavLink to='about'><li>About</li></NavLink>  
    //        <NavLink to='chefs'><li>Productdetail</li></NavLink> 
    //        <NavLink to='contact'> <li>Contact</li></NavLink>
    //         <NavLink to='menu'><li>Blog</li></NavLink>
    //         <NavLink to='register'><li>Register</li></NavLink>
    //     </ul>

       
    // </nav>

    <nav className="bg-gray-600 p-4 text-white">
    <div className="flex justify-between items-center">
      <p className="italic text-xl">🌿Eve<span className="text-yellow-300">mens</span></p>

      {/* Hamburger Toggle */}
      <input id="menu-toggle" type="checkbox" className="peer hidden" />
      <label htmlFor="menu-toggle" className="md:hidden block cursor-pointer">
        ☰
      </label>

      {/* Menu Items */}
      <ul className="peer-checked:flex hidden md:flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0 font-bold">
         <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="about"><li>About</li></NavLink>
        <NavLink to="product-details"><li>Products</li></NavLink>
        <NavLink to="contact"><li>Contact</li></NavLink>
        <NavLink to="blog"><li>Blog</li></NavLink>
        {/* <NavLink to="register"><li>Register</li></NavLink> */}
      </ul>
    </div>
  </nav>


  )
}

export default Navbar