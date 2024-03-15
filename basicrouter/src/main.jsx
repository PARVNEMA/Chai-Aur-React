import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'


import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Navbar from './components/Navbar.jsx'


const router=createBrowserRouter([
  {
path:"/",
element: <><Navbar /><Home /></>
  },
  {
    path:"/about",
    element: <><Navbar /><About /></>
      },
      {
        path: "/user/:username",
        element: <><Navbar /><User /></>
          },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
