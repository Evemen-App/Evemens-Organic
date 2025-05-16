// import React from 'react'
// import { Link } from 'react-router'
// import sheacream from '../../assets/images/sheacream.jpg'
// import black from '../../assets/images/black.jpg';
// import sheagel from '../../assets/images/sheagel.jpg';
// import tumericpic from '../../assets/images/tumericpic.jpg';
// import charcoalpic from '../../assets/images/charcoalpic.jpg';
// import showergel from '../../assets/images/showergel.jpg';


// const AllProducts = () => {
//   return (
   
// <div>
//       <h1 className="text-center text-4xl md:text-5xl font-bold mt-10">Our Products</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
//         {/* Product Card - repeat for each product */}
//         <div className="max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 mt-6">
//           <div className="bg-amber-100 flex items-center justify-center h-48">
//             <img src={sheacream} alt="Organic Shea Butter Cream" className="object-contain h-full" />
//           </div>
//           <div className="p-5 text-gray-800 text-center">
//             <h3 className="text-lg font-semibold">Organic Shea Butter Cream</h3>
//             <p className="text-sm mt-2">
//               100% pure, unrefined shea butter — beautifully packaged for gifting or self-care.
//             </p>
//             <div className="mt-4 space-y-1">
//               <p><strong>Price per Box:</strong> GHS 600</p>
//               <p><strong>Price per Item:</strong> GHS 25</p>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <Link to="/EditForm" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600">Edit</Link>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Delete</button>
//             </div>
//           </div>
//         </div>

//         {/* Duplicate this card with different images and titles */}
//         <div className="max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 mt-6">
//           <div className="bg-amber-100 flex items-center justify-center h-48">
//             <img src={black} alt="Organic African Black Soap" className="object-contain h-full" />
//           </div>
//           <div className="p-5 text-gray-800 text-center">
//             <h3 className="text-lg font-semibold">Organic African Black Soap</h3>
//             <p className="text-sm mt-2">
//               Made from natural plant-based ingredients for deep cleansing and nourishing skin naturally.
//             </p>
//             <div className="mt-4 space-y-1">
//               <p><strong>Price per Box:</strong> GHS 600</p>
//               <p><strong>Price per Item:</strong> GHS 25</p>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <Link to="/editform" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600">Edit</Link>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Delete</button>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 mt-6">
//           <div className="bg-amber-100 flex items-center justify-center h-48">
//             <img src={sheagel} alt="African Black Shower Gel" className="object-contain h-full" />
//           </div>
//           <div className="p-5 text-gray-800 text-center">
//             <h3 className="text-lg font-semibold">African Black Shower Gel</h3>
//             <p className="text-sm mt-2">
//             Gently cleanses and hydrates skin, ideal for daily use and all skin types.
//             </p>
//             <div className="mt-4 space-y-1">
//               <p><strong>Price per Box:</strong> GHS 600</p>
//               <p><strong>Price per Item:</strong> GHS 25</p>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <Link to="/editform" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600">Edit</Link>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Delete</button>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 mt-6">
//           <div className="bg-amber-100 flex items-center justify-center h-48">
//             <img src={tumericpic} alt="Organic Turmeric Soap" className="object-contain h-full" />
//           </div>
//           <div className="p-5 text-gray-800 text-center">
//             <h3 className="text-lg font-semibold">Organic Turmeric Soap</h3>
//             <p className="text-sm mt-2">
//               Brightens skin naturally using turmeric extract and shea base.
//             </p>
//             <div className="mt-4 space-y-1">
//               <p><strong>Price per Box:</strong> GHS 600</p>
//               <p><strong>Price per Item:</strong> GHS 25</p>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <Link to="/editform" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600">Edit</Link>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Delete</button>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 mt-6">
//           <div className="bg-amber-100 flex items-center justify-center h-48">
//             <img src={charcoalpic} alt="Charcoal Soap" className="object-contain h-full" />
//           </div>
//           <div className="p-5 text-gray-800 text-center">
//             <h3 className="text-lg font-semibold">Activated Charcoal Soap</h3>
//             <p className="text-sm mt-2">
//             Detoxifies and exfoliates, great for oily and acne-prone skin types.
//             </p>
//             <div className="mt-4 space-y-1">
//               <p><strong>Price per Box:</strong> GHS 600</p>
//               <p><strong>Price per Item:</strong> GHS 25</p>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <Link to="/editform" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600">Edit</Link>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Delete</button>
//             </div>
//           </div>
          
//         </div>

//         <div className="max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 mt-6">
//           <div className="bg-amber-100 flex items-center justify-center h-48">
//             <img src={showergel} alt="Showergel.jpg" className="object-contain h-full" />
//           </div>
//           <div className="p-5 text-gray-800 text-center">
//             <h3 className="text-lg font-semibold">Organic Shea Showergel</h3>
//             <p className="text-sm mt-2">
//             A soothing blend that rejuvenates and repairs your skin with every wash made from shea butter.ideal for all skin types.
//             </p>
//             <div className="mt-4 space-y-1">
//               <p><strong>Price per Box:</strong> GHS 600</p>
//               <p><strong>Price per Item:</strong> GHS 25</p>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <Link to="/editform" className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600">Edit</Link>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Delete</button>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>

//   )
// }

// export default AllProducts



import React from 'react';
import { Link } from 'react-router-dom';
import sheacream from '../../assets/images/sheacream.jpg';
import black from '../../assets/images/black.jpg';
import sheagel from '../../assets/images/sheagel.jpg';
import tumericpic from '../../assets/images/tumericpic.jpg';
import charcoalpic from '../../assets/images/charcoalpic.jpg';
import showergel from '../../assets/images/showergel.jpg';

const AllProducts = () => {
  return (
    <div className="p-4 md:ml-64">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
        />
        <Link
          to="/dashboard/adproduct"
          className="bg-green-800 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm text-center"
        >
          + Add Product
        </Link>
      </div>

      <h1 className="text-center text-green-800 text-3xl md:text-4xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product Card 1 */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 text-sm">
          <div className="bg-amber-100 flex items-center justify-center h-36 mb-4">
            <img src={sheacream} alt="Organic Shea Butter Cream" className="object-contain h-full" />
          </div>
          <div className="text-gray-800 text-center">
            <h3 className="font-semibold text-base">Organic Shea Butter Cream</h3>
            <p className="mt-2 text-xs">100% pure, unrefined shea butter — beautifully packaged for gifting or self-care.</p>
            <div className="mt-4 space-y-1 text-xs">
              <p><strong>Price per Box:</strong> GHS 600</p>
              <p><strong>Price per Item:</strong> GHS 25</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Link to="/editform" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 text-sm">
          <div className="bg-amber-100 flex items-center justify-center h-36 mb-4">
            <img src={black} alt="Organic African Black Soap" className="object-contain h-full" />
          </div>
          <div className="text-gray-800 text-center">
            <h3 className="font-semibold text-base">Organic African Black Soap</h3>
            <p className="mt-2 text-xs">Made from natural plant-based ingredients for deep cleansing and nourishing skin naturally.</p>
            <div className="mt-4 space-y-1 text-xs">
              <p><strong>Price per Box:</strong> GHS 600</p>
              <p><strong>Price per Item:</strong> GHS 25</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Link to="/editform" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 text-sm">
          <div className="bg-amber-100 flex items-center justify-center h-36 mb-4">
            <img src={sheagel} alt="African Black Shower Gel" className="object-contain h-full" />
          </div>
          <div className="text-gray-800 text-center">
            <h3 className="font-semibold text-base">African Black Shower Gel</h3>
            <p className="mt-2 text-xs">Gently cleanses and hydrates skin, ideal for daily use and all skin types.</p>
            <div className="mt-4 space-y-1 text-xs">
              <p><strong>Price per Box:</strong> GHS 600</p>
              <p><strong>Price per Item:</strong> GHS 25</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Link to="/editform" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 text-sm">
          <div className="bg-amber-100 flex items-center justify-center h-36 mb-4">
            <img src={tumericpic} alt="Organic Turmeric Soap" className="object-contain h-full" />
          </div>
          <div className="text-gray-800 text-center">
            <h3 className="font-semibold text-base">Organic Turmeric Soap</h3>
            <p className="mt-2 text-xs">Brightens skin naturally using turmeric extract and shea base.</p>
            <div className="mt-4 space-y-1 text-xs">
              <p><strong>Price per Box:</strong> GHS 600</p>
              <p><strong>Price per Item:</strong> GHS 25</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Link to="/editform" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 5 */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 text-sm">
          <div className="bg-amber-100 flex items-center justify-center h-36 mb-4">
            <img src={charcoalpic} alt="Activated Charcoal Soap" className="object-contain h-full" />
          </div>
          <div className="text-gray-800 text-center">
            <h3 className="font-semibold text-base">Activated Charcoal Soap</h3>
            <p className="mt-2 text-xs">Detoxifies and exfoliates, great for oily and acne-prone skin types.</p>
            <div className="mt-4 space-y-1 text-xs">
              <p><strong>Price per Box:</strong> GHS 600</p>
              <p><strong>Price per Item:</strong> GHS 25</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Link to="/editform" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-4 text-sm">
          <div className="bg-amber-100 flex items-center justify-center h-36 mb-4">
            <img src={showergel} alt="Organic Shea Showergel" className="object-contain h-full" />
          </div>
          <div className="text-gray-800 text-center">
            <h3 className="font-semibold text-base">Organic Shea Showergel</h3>
            <p className="mt-2 text-xs">A soothing blend that rejuvenates and repairs your skin with every wash made from shea butter.</p>
            <div className="mt-4 space-y-1 text-xs">
              <p><strong>Price per Box:</strong> GHS 600</p>
              <p><strong>Price per Item:</strong> GHS 25</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Link to="/editform" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</Link>
              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;


