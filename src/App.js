import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodo] = useState([]);  {/*this is a state variable using hook useState to add new task*/ }
  const [newTask, setNewTask] = useState("");  {/*this is a state variable using hook useState to get the 
task that user inputs*/ }

  const handleChange = (e) =>
  {
    setNewTask(e.target.value);
  }

  const addTask = () =>
  {
    {/*const tempList = [...todoList,newTask];
    setTodo(tempList); */}  {/*this is the most basic way, look elow for optimised way */}
    setTodo([...todoList,newTask]);
  }

  const deleteTask = (taskName) =>
  {
    setTodo(todoList.filter((task)=>{return task !== taskName}));
  }

  return (
    <div className="App">
      <h2>To do list</h2>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="listTask">
        {/* {newTask} */}   {/* this statement shows that the dom is catching the input and can operate over it */}
      </div>
        {todoList.map((task) => {
          return  <div>
            <h4>{task}</h4>
            <button onClick={() => deleteTask(task)}>Mark as Complete</button>
          </div>
        })}
    </div>
  );
}

export default App;
