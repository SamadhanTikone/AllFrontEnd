 import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Layout from "./Layout"
import Error from "./Error"
export default function ReactRounder() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <><Layout/></>,
            errorElement:<Error/>,
            children:[
                {
                    path:"",
                    element: <><Home/></>
                },
                {
                    path:"/about",
                    element: <><About/></>
                },
                {
                    path:"/contactUs",
                    element:<><Contact/></>
                },
            ]
        }
        
        

    ])

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
}
