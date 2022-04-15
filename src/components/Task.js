


const tasks = [
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
]
const Tasks=() =>
{
    return(
        <>
       { 
        tasks.map((task) =>(
       <h3>{task.text}</h3>
       ))}
        </>
    )
}
export default Tasks
