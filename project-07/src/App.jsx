
import { useGSAP } from '@gsap/react'
import './App.css'
import gsap from 'gsap'
import { useRef } from 'react'
import Router from './Components/Router';
// import Booking from './SeatBooking/Booking';

function App() {
 
  const refGSAP = useRef();


  useGSAP(()=>{
    gsap.from(refGSAP.current,{
      y:300,
      delay:1,
      duration:1,
      scale:0,
      opacity:0,
      top:20,
      
    })

  })
  return (
   <>

   {/* <main>
    <div className="box" ref={refGSAP}>

    </div>
   </main> */}
   <Router/>
   
   {/* <Booking/> */}
   
   </>
  )
}

export default App
