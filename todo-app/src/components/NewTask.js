import { useState } from "react"
import styles from "./NewTask.module.css";
const NewTask = (props) => {

    const [enteredTask, setEnteredTask] = useState("")

    function submitHandler(event){
        event.preventDefault()
        console.log(enteredTask)
        if(enteredTask.trim().length !== 0){
            props.onAdd(enteredTask)
        }
        else{
            window.alert("Please enter a value")
        }
        
        setEnteredTask("")

    }

    function taskChangeHandler(event){
        setEnteredTask(event.target.value)
    }

    return(
        <div className={styles.formContainer}>
        <h2>Todo List</h2>
        <form onSubmit={submitHandler}>
            <input type="text" name="text" onChange={taskChangeHandler} value={enteredTask}/>
            <br/>
            <button className={styles.button}>Add</button>
        </form>
        </div>
    )

}

export default NewTask;