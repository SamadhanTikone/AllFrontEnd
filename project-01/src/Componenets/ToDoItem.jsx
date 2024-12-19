import PropTypes from 'prop-types';
import styles from "./ToDoList.module.css"

export default function ToDoItem({item , toDos , setToDos}) {

  function handleDelete(){

    setToDos( toDos.filter((todo)=> todo !== item))

  }
  const handleText = ()=>{
    
  }
  return (
    
    <div className={styles.itemList}>
        <h3 onClick={handleText}>{item}</h3>
<span><button onClick={handleDelete}>x</button></span>
        </div>
  
  )
}

ToDoItem.propTypes = {
    item: PropTypes.string,
    toDos: PropTypes.array,
    setToDos: PropTypes.func
}

