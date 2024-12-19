 import { useContext } from "react"
import { UserContext } from "../App"

export default function ChildC() {
    const user = useContext(UserContext);
    
  return (
    <div >
      <h1 >Hello, {user.name}</h1>
      <button className='bg-yellow-600 p-4 rounded-lg' onClick={()=> user.setTheme(!user.theme)}>Change Theme</button>

      
    </div>
  )
}
