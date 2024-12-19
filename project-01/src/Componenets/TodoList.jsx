import ToDoItem from './ToDoItem';
import PropTypes from "prop-types"
import styles from "./ToDoList.module.css"

export default function TodoList({toDos, setToDos}) {
  return (
    <div className={styles.toDoList}>
      {  toDos.map((item)=>
        (  <ToDoItem  key={item} item={item}  toDos={toDos} setToDos={setToDos} /> ))}
    </div>
  )
}

ToDoItem.propTypes = {
    toDos : PropTypes.array,
    setToDos: PropTypes.func
}