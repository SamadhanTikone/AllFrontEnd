import { useState } from "react";
import Input from "./Input";
import Board from "./Board";

export default function ToDoList() {

    const[taskList, setTaskList] = useState([])
    console.log(taskList);
    
  return (
    <>
   
    <div className="flex justify-center mt-10 h-[80vh]  ">
    <div className="bg-purple-900 p-12 rounded-xl">
      <h1 className="text-4xl font-bold text-center my-3"> To Do APP</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <Board taskList={taskList} setTaskList={setTaskList}/>
      
    </div>
    </div>
    </>
  )
}
