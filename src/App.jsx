import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Homeview from "./pages";
import About from "./pages/OtherPages/About";
// import Chefs from './pages/OtherPages/Productdetail'
import Contact from "./pages/OtherPages/Contact";
import Blog from "./pages/OtherPages/Blog";
import Register from "./pages/OtherPages/Register";
import Productdetail from "./pages/OtherPages/Productdetail";
import Cart from "./pages/OtherPages/Cart";
import DashboardLayout from "./layout/DashboardLayout";
import AdProduct from "./pages/dashboard/AdProduct";
import AllProducts from "./pages/dashboard/AllProducts";
import EditForm from "./components/EditForm";
import Adminlogin from "./pages/auth/Adminlogin";
import DashboardView from "./pages/dashboard/DashboardView";
import AdminProfile from "./pages/dashboard/AdminProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Homeview /> },
        { path: "about",element: <About />, },
        { path: "product-details", element: <Productdetail />,},
        { path: "contact", element: <Contact />,},
        { path: "blog", element: <Blog />,},
        { path: "register", element: <Register />,},

        { path: "cart", element: <Cart />}

      ],

    },

    { 

      path: "/dashboard",
       element: <DashboardLayout />,
      children: [
        {index: true, element: <DashboardView />},
        {path: "adproduct", element: <AdProduct/>},
        {path: "allproduct", element: <AllProducts/>},
        {path: "dashboardview", element: <DashboardView/>},
        {path: "adminprofile", element: <AdminProfile />},
      ]

    },

    {
      path: "/editform",
       element: <EditForm />,
    },
    {
      path: "/adminlogin",
      element: <Adminlogin />,
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
