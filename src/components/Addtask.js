import React from 'react'
import { useState } from 'react'



const Addtask = () => {
  const [text,setext]=useState('')
  const [dat,setday]=useState('')
  const [reminder,setreminder]=useState('false')
  return (
    <form className='add-forms'>
        <div className='form-control'>
        <label className='form-control label'>Task</label>
            <input type='text' 
            placeholder='add' 
            value={text} 
            onChange={(e)=>setext(e.target.value)}/>

            </div>
        <div className='form-control'>
        <label className='form-control label'>Day and time</label>
            <input type='text'
             placeholder='add'
             value={dat} 
             onChange={(e)=>setday(e.target.value)}
             ></input>
        </div>
        <div className='form-control-check'>
        <label className='form-control-check label'>Reminder</label>
            <input type='checkbox' 
            placeholder='add'
            value={reminder} 
             onChange={(e)=>setreminder(e.currentTarget.checked )}
            ></input>
        </div>
    <input type='submit' className='btn btn-block' value='save task'></input>

    </form>
  )
}

export default Addtask