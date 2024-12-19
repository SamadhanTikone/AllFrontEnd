// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// import Home from "./Components/Home/Home"
import ThemeContext from "./Components/Context/Context"

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Layout from "./Components/OUtlet/Layout"
import Portfolio from "./Components/Resume/Portfolio"

function App() {

 
  // useGSAP (()=>{
  //   gsap.from('.box', {
  //     scrollTrigger: {
  //       trigger: '.box',          // Trigger the animation when the element enters the viewport
  //       start: 'top center ',      // Start animation when top of the element reaches the bottom of the viewport
  //       end: 'bottom center',        // End animation when the bottom of the element reaches the top of the viewport
  //       scrub: true,              // Allows smooth animation that scrubs the progress as you scroll
  //       // markers: true,            // Show markers to help visualize start and end of animation
  //     },
  //     opacity: 0,
  //     // rotate:360,
  //     scale:2,   
  //     border:50,             // Animate opacity from 0 to 1
  //     y: 100,                    // Animate the element to move from 100px down to original position
  //     duration: 1,               // Duration of the animation
  //   });
  // })


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        
        },
        {
          path:"/about",
          element:<About/>
        
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/resume",
          element:<Portfolio/>
        }
      ]
      
    },
    
    
      ])
  return (
  <>
  
  <ThemeContext>


  <RouterProvider router={router} />
  </ThemeContext>
  
  </>
  )
}

export default App
