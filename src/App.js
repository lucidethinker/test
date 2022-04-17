import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';

const App = () =>{
    const[tasks,setTasks] = useState([

      {
          id : 1,
          text:'Doctor appoinment',
          dat:'Feb 5th at 2:30pm',
          reminder: true,
      },
      {      
          id : 2,
          text:'Ea proident mollitint',
          dat:'Feb 7th at 2:40pm',
          reminder: true,
      },
      {
      id : 3,
      text:'Anim magna proident',
      dat:'Feb 6th at 2:30pm',
      reminder: false,
      },
  
  ])
  
//Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }


  //Toggle Reminder

  const toggleReminder =(id) =>{
    setTasks(tasks.map((task)=>task.id === id ?{...task,reminder :!task.reminder}:task))
  }


  return (
    <div className="container" >

    <Header  />
    {

      tasks.length >0 ? 
      (
       <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder}/>
      ):'No Task to show'
    }

    </div>

    
    )
}
// const Headingstyle = {
//   color:'red',backgroundColor:'black'
// }

export default App;
