import Header from './components/Header';
import Tasks from './components/Tasks';
import React, { useEffect, useState } from "react";
const App = () => {
 const [tasks,setTasks] = useState([
{
    id:1,
    text:'Doctors Appointment',
    day:'Feb 5th at 2:30pm',
    reminder:true,
} ,
{
 id:2,
 text:'Doctors Appointment',
 day:'Feb 6th at 2:30pm',
 reminder:true,
} ,
{
 id:3,
 text:'Doctors Appointment',
 day:'Feb 5th at 1:30pm',
 reminder:false,
} 
 ])
 
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className = 'container'>
      <Header title="karl"/>
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
    </div>
  )
}
export default App;