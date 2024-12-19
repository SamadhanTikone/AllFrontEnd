import { useState } from "react"
import ChangeName from "./ChangeName"

export default function Input() {
  const[name, setName] = useState("")
  return (
    <div className="container px-96 mx-36 my-32">

      <label htmlFor="name" className="text-xl" >Name: </label  >
      <input 
             type="text" 
             id="name"
             placeholder="name"
             className="px-2 py-4 rounded-lg text-xl"
             onChange={(e)=> setName(e.target.value)}
             />

      <h1 className="text-2xl p-4">Hello, {name}</h1>
      <h1 className="text-2xl p-4">Hello, {name} you are doing really great today . So, keep it up.</h1>
      
      <ChangeName setName={setName}/>
    </div>
  )
}
