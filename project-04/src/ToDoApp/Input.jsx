import PropTypes from 'prop-types';
import { useState } from "react"

export default function Input({taskList, setTaskList}) {
    const[task, setTask] = useState("")

    const handleAdd = (e) => {

       e.preventDefault();
       if(!task){
        return alert("Please Enter Task")
       }
       setTaskList([...taskList, task])
       setTask('')

        
    }
  return (
    <div>
      
      <form >
      <input 
         type="text" 
         placeholder="Enter Your Task" 
         id="task"
         className="px-4 py-6 rounded-lg text-xl" 
         value={task}
         onChange={(e)=>setTask(e.target.value)}
         
         />
         
         <button className="px-4 py-6 ml-2 text-xl bg-gray-500 rounded-lg" onClick={handleAdd}>Add</button>
         

         </form>



    </div>
  )
}
Input.propTypes = {
    taskList: PropTypes.array,
    setTaskList: PropTypes.func,
  };
