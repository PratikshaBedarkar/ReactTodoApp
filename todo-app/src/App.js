import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(enteredTask) {
    console.log("hello");
    setTasks((prevTasks) => {
      const date = new Date();
      const newTask = { id: date.getTime(), name: enteredTask };
      return prevTasks.concat(newTask);
    });
  }

  function onEditHandler() {}

  function onDeleteHandler(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    console.log(taskId)
  }

  return (
    <div>
      <NewTask onAdd={addTaskHandler} />
      <TaskList
        tasks={tasks}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

export default App;
