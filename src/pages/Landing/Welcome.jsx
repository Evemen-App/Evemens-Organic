import React from "react";
import welcomepic from "../../assets/images/welcomepic.jpg"

const Welcome = () => {
  return (
    // <section className='bg-green-900 text-white h-[70vh]'>
    //     <div className="max-w-4xl mx-auto text-center md:text-left">
    //   <p className=" md:text-4xl mb-4">
    //     Welcome to Evemens Organic
    //   </p>
    //   <h1 className=" md:text-xl font-bold">
    //     Here is Nature’s Glow, we believe in the healing power of nature. Our shea butter is 100% organic, ethically sourced, and handcrafted with care to bring out your skin's natural radiance.
    //     <br className="hidden md:block" />
    //     Embrace simplicity, purity, and glow-up goodness—naturally.
    //   </h1>
    // </div>
    // </section>

    // <div className="flex flex-col items-center text-center bg-gray-200 px-6 py-16 md:px-12 lg:px-20">
    //   <img src="welcomepic" alt="welcomepic.jpg" />
    //   <h2 className="italic text-base md:text-lg">Welcome to Evemens</h2>
    //   <h1 className=" text-2xl md:text-4xl lg:text-5xl mt-6">
    //     At Evemens, we believe in the healing power of nature. Our shea butter
    //     is 100% organic, ethically sourced, and handcrafted with care to bring
    //     out your skin's natural radiance.
    //     <br className="hidden md:block" />
    //     Embrace simplicity, purity, and glow-up goodness—naturally.
    //   </h1>
    //   <p className="mt-6 text-sm md:text-base lg:text-lg">
    //     Discover Amazing product for your skincare
    //   </p>
    // </div>


    <section className="bg-gray-200 px-6 py-16 md:px-12 lg:px-20">
      <h2 className=" text-2xl italic text-bold font-bold p-10 text-green-900">Welcome to Evemens</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          
          <h1 className="text-2xl  text-gray-800">
            At Evemens, we believe in the healing power of nature. Our shea butter
            is 100% organic, ethically sourced, and handcrafted with care to bring
            out your skin's natural radiance.
            <br className="hidden md:block" />
            Embrace simplicity, purity, and glow-up goodness—naturally.
          </h1>
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-700">
            Discover amazing products for your skincare.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={welcomepic}
            alt="Welcome to Evemens Organic"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
