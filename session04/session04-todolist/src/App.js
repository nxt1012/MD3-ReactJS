import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Item from "./components/Item";
import Total from "./components/Total";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, taskContent: "Buy Milk", isEditing: false, isCompleted: false },
    { id: 1, taskContent: "Buy Eggs", isEditing: false, isCompleted: false },
  ]);
  const addNewTask = (taskContent) => {
    const newTask = {
      id: tasks.length,
      taskContent: taskContent,
      isEditing: false,
      isCompleted: false,
    };
    setTasks([newTask, ...tasks]);
  };
  const changeCompleteStatus = (index) => {
    const changedElement = tasks.find((task) => task.id === index);
    changedElement.isCompleted = !changedElement.isCompleted;
    const changedTasks = tasks.map((task) => (task.id === index ? task = changedElement : task
      ))
    setTasks(changedTasks);

  };
  const deleteTask = (index) => {
    setTasks(tasks.splice(index, 1));
    console.log(tasks);
  };
  // const [editElement, setEditElement] = useState({})
  // const editTask = (taskId) => {
  //   const editElement = tasks.findIndex((task) => task.id === taskId);

  // }
  return (
    <div className="App">
      <p className="display-5">To-do List</p>
      <Form addNewTask={addNewTask} />
      <Item tasks={tasks} deleteTask={deleteTask} changeCompleteStatus={changeCompleteStatus}/>
      <Total
        tasks={tasks}
        
      />
    </div>
  );
}

export default App;
