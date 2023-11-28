import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './components/pages/Contact.jsx'
import Navbar  from './components/pages/Navbar.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children :[
      {
      path: "/Navbar",
      element: <Navbar />,
      },
      {
        path: "/contact",
        element: <Contact />,
        },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
