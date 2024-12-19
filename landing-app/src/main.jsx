import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Navbar from './Contact/Navbar.jsx'
// import Home from "./Router/Home.jsx"
// import About from "./Router/About.jsx"
// import Login from "./Router/Login.jsx"
import './index.css'

// import {createBrowserRouter,RouterProvider,} from "react-router-dom"

//  const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <> <Navbar/><Home/> </>,
  
//   },
//   {
//     path: "/about",
//     element: <> <Navbar/><About/> </>,
  
//   },
//   {
//     path: "/login",
//     element: <> <Navbar/><Login/> </>,
  
//   },

// ]


// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router}/> */}
  </StrictMode>,
)
