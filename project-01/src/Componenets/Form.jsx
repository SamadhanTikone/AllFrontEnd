import {useState} from 'react'
import styles from "./Form.module.css"
import PropTypes from 'prop-types';


export default function Form( {toDos , setToDos}) {

    const[text, setText]= useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(text)
        setText('')
        setToDos([...toDos, text])
    }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <input onChange={(e)=>setText(e.target.value)} type="text" value={text} />
        <button type='submit'>Add</button>
      </form>
  )
}

Form.propTypes = {

    toDos : PropTypes.array,
    setToDos : PropTypes.func

}
