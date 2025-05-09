import React from 'react'
import { useState } from 'react'
import sheacream from "../../assets/images/sheacream.jpg"
import black from '../../assets/images/black.jpg'

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
          id: 1,
          name: "Organic Shea Butter Cream",
          image: sheacream,
          qtyBox: 2,
          qtyItem: 4,
          priceBox: 100,
          priceItem: 25,
        },
        {
          id: 2,
          name: "Organic African Black Soap",
          image: black,
          qtyBox: 1,
          qtyItem: 3,
          priceBox: 100,
          priceItem: 25,
        },
      ]);
    
      const increase = (id, field) => {
        setCartItems(prev =>
          prev.map(item =>
            item.id === id ? { ...item, [field]: item[field] + 1 } : item
          )
        );
      };
    
      const decrease = (id, field) => {
        setCartItems(prev =>
          prev.map(item =>
            item.id === id && item[field] > 0 ? { ...item, [field]: item[field] - 1 } : item
          )
        );
      };
    
      const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
      };
    
      const getTotal = (item) => {
        return (item.qtyBox * item.priceBox) + (item.qtyItem * item.priceItem);
      };

  return (



    <div className="px-4 py-10 md:px-10">
    <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
            <th className="p-4 border">Product</th>
            <th className="p-4 border">Qty per Box</th>
            <th className="p-4 border">Qty per Item</th>
            <th className="p-4 border">Price/Box</th>
            <th className="p-4 border">Price/Item</th>
            <th className="p-4 border">Total</th>
            <th className="p-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="text-sm text-gray-700">
              <td className="p-4 border flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                <span>{item.name}</span>
              </td>
              <td className="p-4 border">
                <div className="flex items-center gap-2">
                  <button onClick={() => decrease(item.id, 'qtyBox')} className="px-2 py-1 border rounded">-</button>
                  <span>{item.qtyBox}</span>
                  <button onClick={() => increase(item.id, 'qtyBox')} className="px-2 py-1 border rounded">+</button>
                </div>
              </td>
              <td className="p-4 border">
                <div className="flex items-center gap-2">
                  <button onClick={() => decrease(item.id, 'qtyItem')} className="px-2 py-1 border rounded">-</button>
                  <span>{item.qtyItem}</span>
                  <button onClick={() => increase(item.id, 'qtyItem')} className="px-2 py-1 border rounded">+</button>
                </div>
              </td>
              <td className="p-4 border">GHS {item.priceBox}</td>
              <td className="p-4 border">GHS {item.priceItem}</td>
              <td className="p-4 border">GHS {getTotal(item)}</td>
              <td className="p-4 border text-center">
                <button onClick={() => removeItem(item.id)} className="text-red-600 font-bold">✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex justify-end">
  <a
    href="https://wa.me/233248093825?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
  >
    Checkout via WhatsApp
  </a>
</div>
    </div>
  </div>
  
  )
}

export default Cart