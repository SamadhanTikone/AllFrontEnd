import { useContext } from "react"
import { Theme } from "../Context/Context"
import Button from '@mui/material/Button';


import  "./Home.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Home() {

  useGSAP(()=>{

    gsap.from(".image-1",{
      x:800,
      delay:1,
    }

    )
  })
  useGSAP(()=>{

    gsap.from(".p",{
      x:-600,
      stagger: 0.2,
      delay:1,
      zIndex:0,
    }

    )
  })

  const{theme} = useContext(Theme)
  return (
    <>
    <div className={`${ theme ? "bg-[#222831] text-white" : " bg-white text-[#222831]"}  ` }>

        <div className="grid sm:grid-cols-2 items-center grid-cols-1">


                <div className="lg:ml-24 md:-mt-48 sm:ml-1 ml-12 mt-12 name">

                  <p className="md:text-[60px] sm:text-[42px] text-[32px] p uppercase  ">tikone</p>
                  <p className="md:text-[82px] sm:text-[60px] text-[40px] p uppercase text-[#FF6500] font-semibold block sm:-mt-10 -mt-5">samadhan</p>
                  <p className="md:tracking-[15px] tracking-[6px] ml-2 sm:text-[16px] text-[10px] p uppercase font-semibold sm:-mt-4" >Front-End Developer</p>
                  <div className="p">
                  <Button variant="outlined" sx={{margin:"8px 8px ",color:"#FF6500", borderColor:"#FF6500"}}>Resume </Button>
                  <Button variant="outlined" sx={{margin:"8px 8px",color:"#FF6500", borderColor:"#FF6500"}}>Portfolio </Button>
                  </div>
                </div>


                <div>
                  <img 
                      src="../../../public/Programming-pana (1).svg"
                      className="w-full mt-4 image-1 drop-shadow-md	"
                      alt="" />

                </div>
        </div>

    </div>
    </>
  )
}
