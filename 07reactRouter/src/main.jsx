import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Home from './Components/Home/Home.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/GitHub/Github.jsx'
//  const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]
//     }
//   ])/
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Github' element={<Github />} />
    {/* <Route path='User' element={<User />} /> */}

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
