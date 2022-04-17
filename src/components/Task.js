import {FaTimes} from 'react-icons/fa'


const Task = ( { task,onDelete,onToggle }) =>
 {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
         onClick={()=> onToggle (task.id)}>
            <h3>{task.text}{' '} <FaTimes style={{color:'blue',cursor:'pointer'}}
                onClick={()=>onDelete(task.id)}

            />
         
            </h3>
            <p>{task.dat}</p>
        </div>
    )
}
export default Task