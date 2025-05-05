import React from "react";
import sheacream from "../../assets/images/sheacream.jpg";
import black from '../../assets/images/black.jpg';
import sheagel from '../../assets/images/sheagel.jpg';
import tumericpic from '../../assets/images/tumericpic.jpg';


const Products = () => {
  return (
    
    <div>
      <h1 className="text-center text-4xl md:text-5xl font-bold m-10">Our Products</h1>
<div className="grid grid-cols-2 ml-40">

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
        <div className="h-50 bg-amber-100 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src={sheacream} alt="sheacream.jpg" />
        </div>

        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Shea Butter cream</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting
            or self-care. Each box contains jars of nourishing goodness.
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-base">
              <p>
                <strong>Price per Box : GHS 600</strong>
              </p>
              <p>
                <strong>Price per Item : GHS 25</strong>
              </p>
              {/* <span className="font-semibold">Price per Box:</span>{" "}
            <span className="text-amber-700 font-bold">GHS 150</span> */}
            </p>
            {/* <p className="text-sm text-gray-600">
            (GHS 50 per item — 3 jars in each box)
          </p> */}
          </div>

          <div className="mt-4">
            <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
        <div className="h-50 bg-amber-100 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src={black} alt="black.jpg" />
        </div>

        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic African Black Soap</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting
            or self-care. Each box contains jars of nourishing goodness.
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-base">
              <p>
                {" "}
                <strong>Price per Box : GHS 600</strong>{" "}
              </p>
              <p>
                {" "}
                <strong>Price per Item : GHS 25</strong>{" "}
              </p>
            </p>
          </div>

          <div className="mt-4">
            <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
        <div className="h-50 bg-amber-100 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src={sheagel} alt="sheagel.jpg" />

        </div>

        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic African Black Shower Gel</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting
            or self-care. Each box contains jars of nourishing goodness.
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-base">
              <p>
                {" "}
                <strong>Price per Box : GHS 600</strong>{" "}
              </p>
              <p>
                {" "}
                <strong>Price per Item : GHS 25</strong>{" "}
              </p>
            </p>
          </div>

          <div className="mt-4">
            <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
        <div className="h-50 bg-amber-100 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src={tumericpic} alt="tumericpic.jpg" />
        </div>

        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Tumeric Soap</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting
            or self-care. Each box contains jars of nourishing goodness.
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-base">
              <p>
                {" "}
                <strong>Price per Box : GHS 600</strong>{" "}
              </p>
              <p>
                {" "}
                <strong>Price per Item : GHS 25</strong>{" "}
              </p>
            </p>
          </div>

          <div className="mt-4">
            <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
        <div className="h-50 bg-amber-100 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src={sheacream} alt="sheacream.jpg" />
        </div>

        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Activated Charcoal Soap</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting
            or self-care. Each box contains jars of nourishing goodness.
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-base">
              <p>
                {" "}
                <strong>Price per Box : GHS 600</strong>{" "}
              </p>
              <p>
                {" "}
                <strong>Price per Item : GHS 25</strong>{" "}
              </p>
            </p>
          </div>

          <div className="mt-4">
            <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mt-20 ">
        <div className="h-50 bg-amber-100 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src={sheacream} alt="sheacream.jpg" />
        </div>

        <div className="p-5 text-gray-800">
          <h3 className="text-lg font-semibold">Organic Shea Butter cream</h3>
          <p className="text-sm mt-2">
            100% pure, unrefined shea butter — beautifully packaged for gifting
            or self-care. Each box contains jars of nourishing goodness.
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-base">
              <p>
                {" "}
                <strong>Price per Box : GHS 600</strong>{" "}
              </p>
              <p>
                {" "}
                <strong>Price per Item : GHS 25</strong>{" "}
              </p>
            </p>
          </div>

          <div className="mt-4">
            <button className="bg-[#2F3624] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#3e472f]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      </div>

    </div>
  );
};

export default Products;
