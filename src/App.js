import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';

const App = () =>{
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
      },
  
  ])
  

  return (
    <div className="container">

    <Header  />
    <Tasks tasks={tasks} />
    </div>
  );
}
// const Headingstyle = {
//   color:'red',backgroundColor:'black'
// }

export default App;
