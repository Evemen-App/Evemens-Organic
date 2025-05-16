import React from 'react'
import { Link } from 'react-router'
// import { Users, Package, ShoppingBag, Activity, DollarSign  } from "lucide-react";
import { useState } from 'react';
import { 
  BarChart, 
  ChevronRight, 
  ShoppingCart, 
  Package, 
  Users, 
  AlertCircle, 
  Truck, 
  DollarSign
} from 'lucide-react';

const Overview = () => {
  return (
   
  //   <div className="p-4 space-y-6">
  //   <h1 className="text-2xl font-bold">Dashboard Overview</h1>

  //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //     <div className="bg-white rounded shadow p-4">
  //       <h2 className="text-sm text-gray-500">Total Users</h2>
  //       <p className="text-2xl font-bold">120</p>
  //     </div>

  //     <div className="bg-white rounded shadow p-4">
  //       <h2 className="text-sm text-gray-500">Total Products</h2>
  //       <p className="text-2xl font-bold">75</p>
  //     </div>

  //     <div className="bg-white rounded shadow p-4">
  //       <h2 className="text-sm text-gray-500">Orders</h2>
  //       <p className="text-2xl font-bold">310</p>
  //     </div>
  //   </div>

  //   <div className="bg-white rounded shadow p-4">
  //     <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
  //     <ul className="text-sm text-gray-600 space-y-2">
  //       <li>User Zee added a new product.</li>
  //       <li>Order #1234 was placed.</li>
  //       <li>3 new users registered.</li>
  //     </ul>
  //   </div>
  // </div>

 <div className="p-4 md:ml-64 min-h-screen bg-gray-50">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">Dashboard Overview</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Manage Cart</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">12</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Recent Orders</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">8</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Pending Approvals</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">5</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold text-gray-700">Approved Requests</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">20</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✓ Product "Shea Butter Cream" added successfully</li>
          <li>✓ Order #12345 marked as approved</li>
          <li>✓ Product "Charcoal Soap" updated</li>
          <li>✓ Pending request from client John Doe</li>
        </ul>
      </div>
    </div>

  )

  



//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
//           <h1 className="text-2xl font-bold tracking-tight text-green-800">Evemens Organic Products</h1>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center">
//               <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
//                 <span className="text-green-800 font-medium">A</span>
//               </div>
//               <span className="ml-2 text-sm text-gray-700">Admin</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <OverviewCard 
//             title="Total Orders" 
//             value="145" 
//             change="+12%" 
//             icon={<ShoppingCart size={20} />} 
//             link="/orders"
//           />
//           <OverviewCard 
//             title="Revenue" 
//             value="$8,450" 
//             change="+5%" 
//             icon={<DollarSign size={20} />} 
//             link="/revenue"
//           />
//           <OverviewCard 
//             title="Products" 
//             value="64" 
//             change="+3" 
//             icon={<Package size={20} />} 
//             link="/products"
//           />
//           <OverviewCard 
//             title="Customers" 
//             value="1,245" 
//             change="+18" 
//             icon={<Users size={20} />} 
//             link="/customers"
//           />
//         </div>

//         {/* Content Sections */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//           {/* Recent Orders */}
//           <div className="lg:col-span-2 bg-white rounded-lg shadow">
//             <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//               <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
//               <a href="/orders" className="text-sm text-green-600 hover:text-green-800 flex items-center">
//                 View all <ChevronRight size={16} />
//               </a>
//             </div>
//             <div className="p-4">
//               <RecentOrdersList />
//             </div>
//           </div>

//           {/* Notifications */}
//           <div className="bg-white rounded-lg shadow">
//             <div className="p-4 border-b border-gray-200">
//               <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
//             </div>
//             <div className="p-4">
//               <NotificationsList />
//             </div>
//           </div>
//         </div>

//         {/* Inventory Alerts */}
//         <div className="mt-6 bg-white rounded-lg shadow">
//           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//             <h2 className="text-lg font-medium text-gray-900">Inventory Alerts</h2>
//             <a href="/inventory" className="text-sm text-green-600 hover:text-green-800 flex items-center">
//               View inventory <ChevronRight size={16} />
//             </a>
//           </div>
//           <div className="p-4">
//             <InventoryAlertsList />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
}

// Overview Card Component
// function OverviewCard({ title, value, change, icon, link }) {
//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <div className="flex items-center justify-between">
//         <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//           {icon}
//         </div>
//       </div>
//       <div className="mt-2">
//         <div className="text-2xl font-bold text-gray-900">{value}</div>
//         <div className="flex items-center mt-1">
//           <span className="text-xs font-medium text-green-600">{change}</span>
//           <span className="text-xs text-gray-500 ml-1">vs last month</span>
//         </div>
//       </div>
//       <a href={link} className="mt-4 text-sm text-green-600 hover:text-green-800 flex items-center">
//         Details <ChevronRight size={16} />
//       </a>
//     </div>
//   );
// }

// Recent Orders List Component
// function RecentOrdersList() {
//   const orders = [
//     { id: 'ORD-5432', customer: 'Sarah Johnson', date: 'May 14, 2025', amount: '$145.99', status: 'Delivered' },
//     { id: 'ORD-5431', customer: 'Michael Brown', date: 'May 13, 2025', amount: '$78.50', status: 'Processing' },
//     { id: 'ORD-5430', customer: 'Emma Wilson', date: 'May 13, 2025', amount: '$245.00', status: 'Shipped' },
//     { id: 'ORD-5429', customer: 'Robert Taylor', date: 'May 12, 2025', amount: '$112.75', status: 'Processing' },
//   ];

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {orders.map((order) => (
//             <tr key={order.id} className="hover:bg-gray-50">
//               <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-green-600">{order.id}</td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
//                   {order.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Helper function to get status color
// function getStatusColor(status) {
//   switch (status) {
//     case 'Delivered':
//       return 'bg-green-100 text-green-800';
//     case 'Shipped':
//       return 'bg-blue-100 text-blue-800';
//     case 'Processing':
//       return 'bg-yellow-100 text-yellow-800';
//     default:
//       return 'bg-gray-100 text-gray-800';
//   }
// }

// Notifications List Component
// function NotificationsList() {
//   const notifications = [
//     { id: 1, type: 'order', message: 'New order #ORD-5432 received', time: '10 minutes ago' },
//     { id: 2, type: 'alert', message: 'Low stock alert: Organic Honey', time: '1 hour ago' },
//     { id: 3, type: 'shipping', message: 'Order #ORD-5430 has been shipped', time: '2 hours ago' },
//     { id: 4, type: 'review', message: 'New review: 5 stars for Organic Tea', time: '3 hours ago' },
//   ];

//   return (
//     <div className="space-y-4">
//       {notifications.map((notification) => (
//         <div key={notification.id} className="flex items-start space-x-3">
//           <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getNotificationColor(notification.type)}`}>
//             {getNotificationIcon(notification.type)}
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="text-sm text-gray-900">{notification.message}</p>
//             <p className="text-xs text-gray-500">{notification.time}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// Helper function to get notification color
// function getNotificationColor(type) {
//   switch (type) {
//     case 'order':
//       return 'bg-blue-100 text-blue-600';
//     case 'alert':
//       return 'bg-red-100 text-red-600';
//     case 'shipping':
//       return 'bg-green-100 text-green-600';
//     case 'review':
//       return 'bg-purple-100 text-purple-600';
//     default:
//       return 'bg-gray-100 text-gray-600';
//   }
// }

// Helper function to get notification icon
// function getNotificationIcon(type) {
//   switch (type) {
//     case 'order':
//       return <ShoppingCart size={16} />;
//     case 'alert':
//       return <AlertCircle size={16} />;
//     case 'shipping':
//       return <Truck size={16} />;
//     case 'review':
//       return <BarChart size={16} />;
//     default:
//       return null;
//   }
// }

// Inventory Alerts List Component
// function InventoryAlertsList() {
//   const alerts = [
//     { id: 1, product: 'Organic Honey', stock: 5, threshold: 10, status: 'Low Stock' },
//     { id: 2, product: 'Organic Quinoa', stock: 3, threshold: 10, status: 'Low Stock' },
//     { id: 3, product: 'Organic Almonds', stock: 0, threshold: 15, status: 'Out of Stock' },
//     { id: 4, product: 'Organic Coconut Oil', stock: 8, threshold: 15, status: 'Low Stock' },
//   ];

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threshold</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//             <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {alerts.map((alert) => (
//             <tr key={alert.id} className="hover:bg-gray-50">
//               <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.product}</td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{alert.stock}</td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{alert.threshold}</td>
//               <td className="px-4 py-4 whitespace-nowrap">
//                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getAlertStatusColor(alert.status)}`}>
//                   {alert.status}
//                 </span>
//               </td>
//               <td className="px-4 py-4 whitespace-nowrap text-sm text-green-600 hover:text-green-800">
//                 <a href={`/restock/${alert.id}`}>Order More</a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Helper function to get alert status color
// function getAlertStatusColor(status) {
//   switch (status) {
//     case 'Low Stock':
//       return 'bg-yellow-100 text-yellow-800';
//     case 'Out of Stock':
//       return 'bg-red-100 text-red-800';
//     default:
//       return 'bg-gray-100 text-gray-800';
//   }
// }


export default Overview