import Task from "./Task";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <ul>
    {props.tasks.map((task)=><Task key={task.id} id={task.id} name={task.name} onDelete={props.onDelete}/>)}
    </ul>
  );
};

export default TaskList;
