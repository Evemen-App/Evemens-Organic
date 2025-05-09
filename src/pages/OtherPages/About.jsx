import React from 'react'
import sheapic from "../../assets/images/sheapic.jpg"
import aboutpic from '../../assets/images/aboutpic.jpg'

const About = () => {
  return (

    
    <div className='bg-cover bg-fixed'>
      <img className='h-140 w-full object-cover' src={aboutpic} alt="aboutpic.jpg" />

        <section className="bg-gray-200 text-gray-800 px-6 py-12 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className='border border-gray-300 p-12 rounded-2xl shadow-2xl'>
        {/* About Us */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">🌿 About Us</h2>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold italic">Eve</span>mens where nature meets nourishment.
        </p>
        <p className="text-lg mb-4">
          Born from a passion for purity and wellness, our mission is simple: to celebrate the beauty of African shea butter in its most authentic form.
          Sourced ethically from trusted women’s cooperatives across West Africa, our products are handcrafted with love, care, and tradition.
        </p>
        <p className="text-lg mb-4">
          At Evemens we believe in the power of nature to heal, protect, and glow. Our shea butter is 100% organic, unrefined, and packed with vitamins that deeply moisturize, soothe, and rejuvenate your skin and hair.
        </p>
        <p className="text-lg mb-4">
          We are more than just skincare—we are a movement that honors culture, empowers communities, and promotes clean beauty for all.
        </p>
        <p className="text-xl font-semibold text-green-700 mt-8">
          Pure. Powerful. Proudly Natural.
        </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 text-left border border-gray-300 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">💚 Why Choose Us</h3>
          <ul className="space-y-4 text-lg ">
            <li><strong>FDA Approved:</strong> Our products meet strict safety and quality standards.</li>
            <li><strong>100% Organic & Unrefined:</strong> No chemicals, no additives—just pure shea goodness.</li>
            <li><strong>Ethically Sourced:</strong> We support women-led cooperatives and fair trade practices.</li>
            <li><strong>Eco-Friendly Packaging:</strong> Sustainability is at the heart of everything we do.</li>
            <li><strong>Handcrafted with Care:</strong> Every product is made in small batches to ensure freshness and quality.</li>
            <li><strong>Skin & Hair Friendly:</strong> Safe for all ages, all skin types, and natural hair textures.</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About