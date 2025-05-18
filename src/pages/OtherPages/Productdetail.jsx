import React from 'react'
import sheacream from "../../assets/images/sheacream.jpg";
import black from '../../assets/images/black.jpg';
import sheagel from '../../assets/images/sheagel.jpg';
import tumericpic from '../../assets/images/tumericpic.jpg';
import charcoalpic from '../../assets/images/charcoalpic.jpg';
import showergel from '../../assets/images/showergel.jpg'
import { Link } from 'react-router';

const Productdetail = () => {
  return (
    // <div>
           
    //       <div>
    //         <h1 className="text-center text-4xl md:text-5xl font-bold ">Our Products</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
    //         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
    //           <div className="h-50 bg-amber-100 flex items-center justify-center">
    //             {/* Replace with actual image */}
    //             <img src={sheacream} alt="sheacream.jpg" />
    //           </div>
      
    //           <div className="p-5 text-gray-800">
    //             <h3 className="text-lg font-semibold">Organic Shea Butter cream</h3>
    //             <p className="text-sm mt-2">
    //               100% pure, unrefined shea butter — beautifully packaged for gifting
    //               or self-care. Each box contains jars of nourishing goodness.
    //             </p>
      
    //             <div className="mt-4 space-y-1">
    //               <p className="text-base">
    //                 <p>
    //                   <strong>Price per Box : GHS 600</strong>
    //                 </p>
    //                 <p>
    //                   <strong>Price per Item : GHS 25</strong>
    //                 </p>
                   
    //               </p>
                 
    //             </div>
      
    //             <div className="mt-4">
    //               <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
    //                 Add to Cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
      
    //         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
    //           <div className="h-50 bg-amber-100 flex items-center justify-center">
    //             {/* Replace with actual image */}
    //             <img src={black} alt="black.jpg" />
    //           </div>
      
    //           <div className="p-5 text-gray-800">
    //             <h3 className="text-lg font-semibold">Organic African Black Soap</h3>
    //             <p className="text-sm mt-2">
    //               100% pure, unrefined shea butter — beautifully packaged for gifting
    //               or self-care. Each box contains jars of nourishing goodness.
    //             </p>
      
    //             <div className="mt-4 space-y-1">
    //               <p className="text-base">
    //                 <p>
                     
    //                   <strong>Price per Box : GHS 600</strong>
    //                 </p>
    //                 <p>
                     
    //                   <strong>Price per Item : GHS 25</strong>
    //                 </p>
    //               </p>
    //             </div>
      
    //             <div className="mt-4">
    //               <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
    //                 Add to Cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
      
    //         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
    //           <div className="h-50 bg-amber-100 flex items-center justify-center">
    //             {/* Replace with actual image */}
    //             <img src={sheagel} alt="sheagel.jpg" />
      
    //           </div>
      
    //           <div className="p-5 text-gray-800">
    //             <h3 className="text-lg font-semibold">Organic African Black Shower Gel</h3>
    //             <p className="text-sm mt-2">
    //               100% pure, unrefined shea butter — beautifully packaged for gifting
    //               or self-care. Each box contains jars of nourishing goodness.
    //             </p>
      
    //             <div className="mt-4 space-y-1">
    //               <p className="text-base">
    //                 <p>
                      
    //                   <strong>Price per Box : GHS 600</strong>
    //                 </p>
    //                 <p>
                      
    //                   <strong>Price per Item : GHS 25</strong>
    //                 </p>
    //               </p>
    //             </div>
      
    //             <div className="mt-4">
    //               <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
    //                 Add to Cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
      
    //         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
    //           <div className="h-50 bg-amber-100 flex items-center justify-center">
    //             {/* Replace with actual image */}
    //             <img src={tumericpic} alt="tumericpic.jpg" />
    //           </div>
      
    //           <div className="p-5 text-gray-800">
    //             <h3 className="text-lg font-semibold">Organic Tumeric Soap</h3>
    //             <p className="text-sm mt-2">
    //               100% pure, unrefined shea butter — beautifully packaged for gifting
    //               or self-care. Each box contains jars of nourishing goodness.
    //             </p>
      
    //             <div className="mt-4 space-y-1">
    //               <p className="text-base">
    //                 <p>
                     
    //                   <strong>Price per Box : GHS 600</strong>
    //                 </p>
    //                 <p>
                     
    //                   <strong>Price per Item : GHS 25</strong>
    //                 </p>
    //               </p>
    //             </div>
      
    //             <div className="mt-4">
    //               <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
    //                 Add to Cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
      
    //         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
    //           <div className="h-50 bg-amber-100 flex items-center justify-center">
    //             {/* Replace with actual image */}
    //             <img src={charcoalpic} alt="charcoalpic.jpg" />
    //           </div>
      
    //           <div className="p-5 text-gray-800">
    //             <h3 className="text-lg font-semibold">Organic Activated Charcoal Soap</h3>
    //             <p className="text-sm mt-2">
    //               100% pure, unrefined shea butter — beautifully packaged for gifting
    //               or self-care. Each box contains jars of nourishing goodness.
    //             </p>
      
    //             <div className="mt-4 space-y-1">
    //               <p className="text-base">
    //                 <p>
                     
    //                   <strong>Price per Box : GHS 600</strong>
    //                 </p>
    //                 <p>
                     
    //                   <strong>Price per Item : GHS 25</strong>
    //                 </p>
    //               </p>
    //             </div>
      
    //             <div className="mt-4">
    //               <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
    //                 Add to Cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
      
    //         <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
    //           <div className="h-50 bg-amber-100 flex items-center justify-center">
    //             {/* Replace with actual image */}
    //             <img src={sheacream} alt="sheacream.jpg" />
    //           </div>
      
    //           <div className="p-5 text-gray-800">
    //             <h3 className="text-lg font-semibold">Organic Shea Butter Lotion</h3>
    //             <p className="text-sm mt-2">
    //               100% pure, unrefined shea butter — beautifully packaged for gifting
    //               or self-care. Each box contains jars of nourishing goodness.
    //             </p>
      
    //             <div className="mt-4 space-y-1">
    //               <p className="text-base">
    //                 <p>
                     
    //                   <strong>Price per Box : GHS 600</strong>
    //                 </p>
    //                 <p>
                     
    //                   <strong>Price per Item : GHS 25</strong>
    //                 </p>
    //               </p>
    //             </div>
      
    //             <div className="mt-4">
    //               <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
    //                 Add to Cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
      
    //         </div>
      
    //       </div>
      
      

    // </div>

    <div>
    <h1 className="text-center text-4xl md:text-5xl font-bold mt-10">Our Products</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      
      {/* Product Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="bg-amber-100 flex items-center justify-center h-48">
          <img src={sheacream} alt="Organic Shea Butter Cream" className="object-contain h-full" />
        </div>
        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Shea Butter Cream</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting or self-care.
          </p>
          <p className="mt-2"><strong>Price per Box:</strong> GHS 600</p>
          <p><strong>Price per Item:</strong> GHS 25</p>
          <div className="mt-4">
            <Link to="/cart" className="block text-center bg-[#2F3624] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3e472f]">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Repeat for each product */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="bg-amber-100 flex items-center justify-center h-48">
          <img src={black} alt="African Black Soap" className="object-contain h-full" />
        </div>
        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic African Black Soap</h3>
          <p className="text-sm mt-2">
            Made from natural plant-based ingredients for deep cleansing and nourishing skin naturally.
          </p>
          <p className="mt-2"><strong>Price per Box:</strong> GHS 600</p>
          <p><strong>Price per Item:</strong> GHS 25</p>
          <div className="mt-4">
            <Link to="/cart" className="block text-center bg-[#2F3624] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3e472f]">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="bg-amber-100 flex items-center justify-center h-48">
          <img src={sheagel} alt="Shea Gel" className="object-contain h-full" />
        </div>
        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">African Black Shower Gel</h3>
          <p className="text-sm mt-2">
            Gently cleanses and hydrates skin, ideal for daily use and all skin types.
          </p>
          <p className="mt-2"><strong>Price per Box:</strong> GHS 600</p>
          <p><strong>Price per Item:</strong> GHS 25</p>
          <div className="mt-4">
            <Link to="/cart" className="block text-center bg-[#2F3624] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3e472f]">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="bg-amber-100 flex items-center justify-center h-48">
          <img src={tumericpic} alt="Turmeric Soap" className="object-contain h-full" />
        </div>
        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Turmeric Soap</h3>
          <p className="text-sm mt-2">
          Brightens skin naturally using turmeric extract and shea base.
          </p>
          <p className="mt-2"><strong>Price per Box:</strong> GHS 600</p>
          <p><strong>Price per Item:</strong> GHS 25</p>
          <div className="mt-4">
            <Link to="/cart" className="block text-center bg-[#2F3624] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3e472f]">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="bg-amber-100 flex items-center justify-center h-48">
          <img src={charcoalpic} alt="Charcoal Soap" className="object-contain h-full" />
        </div>
        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Activated Charcoal Soap</h3>
          <p className="text-sm mt-2">
            Detoxifies and exfoliates, great for oily and acne-prone skin types.
          </p>
          <p className="mt-2"><strong>Price per Box:</strong> GHS 600</p>
          <p><strong>Price per Item:</strong> GHS 25</p>
          <div className="mt-4">
            <Link to="/cart" className="block text-center bg-[#2F3624] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3e472f]">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="bg-amber-100 flex items-center justify-center h-48">
          <img src={showergel} alt="Shea Shower Gel" className="object-contain h-full" />
        </div>
        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Shea Shower Gel</h3>
          <p className="text-sm mt-2">
            A soothing blend that rejuvenates and repairs your skin with every wash made from shea butter. ideal  for all skin types.
          </p>
          <p className="mt-2"><strong>Price per Box:</strong> GHS 600</p>
          <p><strong>Price per Item:</strong> GHS 25</p>
          <div className="mt-4">
            <Link to="/cart" className="block text-center bg-[#2F3624] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3e472f]">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>

  )
}

export default Productdetail