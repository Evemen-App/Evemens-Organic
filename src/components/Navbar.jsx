import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center italic bg-amber-900 p-4 '> 
        <p>Eve<span className='italic text-yellow-300'>mens </span></p>

        <ul className='flex font-bold gap-20 p-3'>
          <NavLink to='about'><li>About</li></NavLink>  
           <NavLink to='chefs'><li>Productdetail</li></NavLink> 
           <NavLink to='contact'> <li>Contact</li></NavLink>
            <NavLink to='menu'><li>Blog</li></NavLink>
            <NavLink to='register'><li>Register</li></NavLink>
        </ul>

        {/* <button className='font-bold border-2 rounded-2xl p-3'>Get Started</button> */}
    </nav>
  )
}

export default Navbar