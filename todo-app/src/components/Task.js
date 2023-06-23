import styles from "./Task.module.css"
const Task = (props) => {
  function deleteHandler() {
    props.onDelete(props.id);
  }
  return (
    <li>
      {props.name}
      <button className={styles.button} onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Task;
