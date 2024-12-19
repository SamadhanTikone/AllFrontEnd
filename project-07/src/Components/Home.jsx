import { useGSAP } from '@gsap/react';
// import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useRef } from 'react'


export default function Home() {
    const refh1 = useRef();

    useGSAP(()=>{
        gsap.from(refh1,{
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
      {/* <AnimatePresence mode="wait"> */}
        <div ref={refh1}
        key={"/"}
          className=""
        //   initial={{ opacity: 0, x: 0 }}
        //   animate={{ opacity: 1, x: 100,}}
        //   exit={{ opacity: 0, scale: 2, transition: { duration: 1 } }}
        >
          <div > 
            <h1  className="text-[200px]  text-white">HOME</h1>
          </div>

          
        </div>
      {/* </AnimatePresence> */}
    </>
  );
}
