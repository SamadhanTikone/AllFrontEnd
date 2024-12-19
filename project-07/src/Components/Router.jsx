import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import { Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Navbar from "./Navbar"
import About from "./About"
import Contact from "./Contact"
import Menu from "./MEnu"

export default function Router() {

    
    const router = createBrowserRouter([
        {
            path:"/",
            element:<> <Navbar/><Home/></>
        },
        {
            path:"/about",
            element:<> <Navbar/><About/></>
        },
        {
            path:"/contact",
            element:<> <Navbar/><Contact/></>
        },
        {
            path:"/menu",
            element:<> <Navbar/><Menu/></>
        },


    ])


   
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
