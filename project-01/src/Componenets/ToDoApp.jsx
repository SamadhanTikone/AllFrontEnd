import  { useState } from 'react'
import Form from "./Form"
import TodoList from './TodoList';

export default function ToDoApp() {

    const[toDos, setToDos]= useState([]);

 


  return (
    <div>

      <Form toDos={toDos} setToDos={setToDos}/>
      <TodoList toDos={toDos} setToDos={setToDos}/>
      
    </div>
  )
}
