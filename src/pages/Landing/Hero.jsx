import React from 'react'
import image from '../../assets/images/hero1.jpg';

const Hero = () => {
  return (
    <div>
      <section
  className="relative w-full h-screen bg-cover bg-center flex items-center justify-start bg-fixed"
  style={{ backgroundImage: `url(${image})` }}
>
  <div>
    <h1 className="text-4xl md:text-6xl font-bold">
     Evemens Organic Products
    </h1>
    <p className="mt-4 text-lg md:text-xl p-6">
      A home of pure organic skin care products for radiant, nourished skin — naturally.
    </p>
  </div>
</section>

    </div>
  )
}

export default Hero;