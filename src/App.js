import Header from './components/Header';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import {useState,useEffect} from 'react';
import Addtask from './components/Addtask'; 
import About from './components/About';
import { css } from "@emotion/react";

import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin:  0 auto;
  padding: 300px;
  text-align: center;
`;


const App = () =>{
    const [showAddTask,setShowAddTask] = useState(false)
    const[tasks,setTasks] = useState([])
    const [loading,setLoading] = useState(false)
  
  
    useEffect(() => {
      setLoading(true)
        const getTasks = async() =>{
          const tasksFromServer = await fetchTasks()
          setTasks(tasksFromServer)
          setLoading(false)
        }
   
     getTasks()
     } ,[])


    const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data 
    }
     


     const fetchTask = async(id) =>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data 
      }
 //Add Task
  
 const addTask =async(task) =>{
   const res = await fetch('http://localhost:5000/tasks',{
     method :'POST',
     headers:{
       'Content-type':'application/json'
     },
     body:JSON.stringify(task)
   })

   const data = await res.json()
   
     setTasks([...tasks,data])
  // const id = Math.floor(Math.random())*1000+1
  // const newtask = {id,...task}
  // setTasks([...tasks,newtask]) 
  

 }


//Delete task
  const deleteTask =async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    setTasks(tasks.filter((task)=>task.id !== id))

  }


  //Toggle Reminder

  const toggleReminder = async (id) =>{
    // setTasks(tasks.map((task)=>task.id === id ?{...task,reminder :!task.reminder}:task))
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,
    reminder: !taskToToggle.reminder}
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {method:'PUT',
    
   headers:{'Content-type':'application/json',
  },
  body:JSON.stringify(updTask)
})
const data = await res.json()

    setTasks(tasks.map((task)=>
    task.id === id ?{...task,reminder :
    data.reminder}:task))
    

  }


  return (
    
    <Router>
       {
        loading ?
        
        <ClipLoader 
        css ={override}
         size={40}
         color={'#1276EF'}
         loading = {loading }
   />
        :
    
    
    <div className="container" >
 

    <Header  onAdd={()=>setShowAddTask(!showAddTask)}
    showAdd={showAddTask} />
   
   <Routes>
     <Route path='/' 
     element={
              <>
                {showAddTask && <Addtask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
    <Route path="/about" element={<About />} />
     </Routes>
     <Footer/>
    </div>
       }
    </Router>
       
    
    )
}
// const Headingstyle = {
//   color:'red',backgroundColor:'black'
// }

export default App;