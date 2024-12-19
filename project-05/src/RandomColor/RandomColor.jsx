import { useState } from "react"

function RandomColor() {

  const[colors, setColor] = useState("red")

  const handelChange = ()=>{
 
   const colorArray = ["green", "blue", "yellow", "orange", "black", "gray", "pink"]

   const randomIndex = Math.floor( Math.random() * colorArray.length )

   const randomColor = colorArray[randomIndex]
   setColor(randomColor)
   

  }
  return (
   <>

    <h1 className="text-6xl font-bold text-center mt-4">Hello, Dear 👋</h1>
    <div className="flex gap-4">

   
    <div 
        style={{backgroundColor:colors}}
         className={`border-box w-96 h-auto rounded-lg  relative mt-12 m-auto shadow-md shadow-current` }
        >
     <p className=" p-4">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi excepturi iure sint molestiae reiciendis sunt eveniet deleniti praesentium asperiores, quos autem doloribus, distinctio debitis voluptate ad, sequi veritatis? Ipsam, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consequatur non, explicabo, blanditiis magnam sed iste dolor officia doloremque consectetur recusandae similique 
     </p>
     

     <div className=" grid place-self-center">
     <button 
            className=" bg-sky-600 px-4 py-2 mb-4 rounded-xl  hover:bg-sky-500 "
            onClick={handelChange}
            >Change Color</button>
     </div>

    </div>
    <div 
        style={{backgroundColor:colors}}
         className={`border-box w-96 h-auto rounded-lg  relative mt-12 m-auto shadow-md shadow-current` }
        >
     <p className=" p-4">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi excepturi iure sint molestiae reiciendis sunt eveniet deleniti praesentium asperiores, quos autem doloribus, distinctio debitis voluptate ad, sequi veritatis? Ipsam, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consequatur non, explicabo, blanditiis magnam sed iste dolor officia doloremque consectetur recusandae similique 
     </p>
     

     <div className=" grid place-self-center">
     <button 
            className=" bg-sky-600 px-4 py-2 mb-4 rounded-xl  hover:bg-sky-500 "
            onClick={handelChange}
            >Change Color</button>
     </div>

    </div>
    <div 
        style={{backgroundColor:colors}}
         className={`border-box w-96 h-auto rounded-lg  relative mt-12 m-auto shadow-md shadow-current ` }
        >
     <p className=" p-4">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi excepturi iure sint molestiae reiciendis sunt eveniet deleniti praesentium asperiores, quos autem doloribus, distinctio debitis voluptate ad, sequi veritatis? Ipsam, voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consequatur non, explicabo, blanditiis magnam sed iste dolor officia doloremque consectetur recusandae similique 
     </p>
     

     <div className=" grid place-self-center">
     <button 
            className=" bg-sky-600 px-4 py-2 mb-4 rounded-xl  hover:bg-sky-500 "
            onClick={handelChange}
            >Change Color</button>
     </div>

    </div>
    </div>

   </>
  )
}

export default RandomColor
