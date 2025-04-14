import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Homeview from './pages'
import About from './pages/OtherPages/About'
// import Chefs from './pages/OtherPages/Productdetail'
import Contact from './pages/OtherPages/contact'
import Blog from './pages/OtherPages/blog'
import Register from './pages/OtherPages/Register'
import Productdetail from './pages/OtherPages/Productdetail'

function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <RootLayout/>,
      children: [{index: true, element: <Homeview />},

        {
          path: 'about', 
          element: <About/>
        },

        {
          path: 'Productdetail', 
          element: <Productdetail/>
        },

        {
          path: 'contact', 
          element: <Contact/>
        },

        {
          path: 'blog', 
          element: <Blog/>
        },
        
        {
          path: 'register', 
          element: <Register/>
        }
      ]


    
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
