import React, {useState} from 'react';
import './App.css';
import Task from './Component/Task';
import { Button } from '@material-ui/core';



function App() {
const [taskName, setTaskName ] = useState("");
const [time, setTime ] = useState("");
const [taskList, setTaskList ] = useState([]);

const addTask = () => {
  setTaskList([...taskList , { task : taskName, time : time } ])
}


  return (
    <div className="App"  >
      <h1> Todo List </h1>
      <label> Task Name: </label>
      <input
       type="text"
       id="task"
        onChange={ (e) => {
        setTaskName(e.target.value)
      }} 
      />

        <label> Time :  </label>
      <input type="text"
       id="time"
        onChange={ (e) => {
        setTime(e.target.value) }}
         /> 
      <Button color="primary" onClick={addTask} > Add </Button>
      
    
         {taskList.map((task) => {
          return <Task taskName = {task.task} time = {task.time} />
        } )}

    </div>
  );
}

export default App;
