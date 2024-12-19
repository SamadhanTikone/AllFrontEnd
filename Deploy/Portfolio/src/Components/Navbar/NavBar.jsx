import {  NavLink,  } from "react-router-dom"
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import { Theme } from "../Context/Context";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function NavBar() {


  useGSAP(()=>{

    gsap.from(".link",{
      y:-200,
      stagger: 0.1,
  
    }

    )
  })
  useGSAP(()=>{

    gsap.from(".nav",{
      y:-200,
      zIndex:100,
    
     
    }

    )
  })



    const{theme , setTheme} = useContext(Theme);
    const[menuIsOpen , setMenuIsOpen] = useState(false)
    const[close , setClose] = useState(false)
    

function toggleTheme (){

    setTheme(!theme)
 
}

function toggleMenu(){
   
 
        setMenuIsOpen(!menuIsOpen)
 
}

function toggleClose (){

    if(menuIsOpen && close){

        setMenuIsOpen(!menuIsOpen)
       
    } 
    else{
        setClose(!close)
    }
   


}


  return (
    <div className={`z-[1000] ${ theme ? "bg-[#222831] text-white" : " bg-white text-[#222831]"} flex justify-around p-6 nav`}>
      <ul className={` ${  menuIsOpen   ? `flex-col absolute w-full z-10 gap-6 text-center top-20 p-12  ${ theme ?  "bg-green-500 opacity-100": " bg-[#222831]" } ` :"hidden " }  flex sm:flex sm:justify-around  sm:flex-row items-center  sm:w-[50%] md:w-[40%]  uppercase font-semibold `}>
        <NavLink to={"/"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : `${ theme ? " text-white" : "  text-[#222831]"} link`}>Home</NavLink>
        <NavLink to={"/about"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " :`${ theme ? " text-white" : "  text-[#222831]"} link `}>About</NavLink>
        <NavLink to={"/contact"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : `${ theme ? " text-white" : "  text-[#222831]"} link`}>Contact</NavLink>    
        <NavLink to={"/resume"} onClick={toggleClose} className={({isActive})=> isActive ? "text-[#FF6500]  " : `${ theme ? " text-white" : "  text-[#222831]"} link`}>Resume</NavLink>

       
      </ul>
      <div className=" sm:hidden" onClick={toggleMenu}>
           { menuIsOpen ?  <CloseIcon sx={{fontSize:"28px"}}/> : <MenuIcon sx={{fontSize:"28px"}}/> }
        </div>

<div className="flex justify-between md:w-[30%] lg:w-[15%]  sm:w-[40%]  w-auto">
<Button variant="outlined" sx={{color:"#FF6500", borderColor:"#FF6500"}}>Contact US</Button>
<Button 
            variant="outlined"
            sx={{color:"#FF6500", borderColor:"#FF6500"}} 
            onClick={toggleTheme}
            
            > { theme ? <DarkModeIcon/> : <LightModeIcon/> }</Button>

</div>

    </div>
  )
}
