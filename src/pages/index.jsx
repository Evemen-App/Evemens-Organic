import React from 'react'
import Hero from './Landing/Hero'
import Testimonials from './Landing/Testimonials'
import Welcome from './Landing/Welcome'
import Products from './Landing/Products'

const Homeview = () => {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <Products/>
        <Testimonials/>

    </div>
  )
}

export default Homeview