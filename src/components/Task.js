import {useState} from 'react';



const Tasks=() =>
{
const[tasks,setTask] = useState([

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
    }

])

    return(
        <>
       { 
        tasks.map((task) =>(
       <h3 key={task.id}>{task.text}</h3>
       ))}
        </>
    )
}
export default Tasks
