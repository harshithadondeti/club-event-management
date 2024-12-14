import React from 'react'
import './AddEvent.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddEvent() {
  const navigate=useNavigate()
  const AddEvent= async()=>{
    
    const eventJson={
      name:document.getElementById('event-name').value,
      time:document.getElementById('event-time').value,
      venue:document.getElementById('event-venue').value,
      topic:document.getElementById('event-topic').value,
      members:document.getElementById('event-members').value,
    }

    await axios.post('http://localhost:3000/api/event',eventJson).then((res)=>{
      alert("New Event is Added")
      navigate('/')
    })
   
  
  .catch((err)=>{
    console.log(err)
  })
      
  }
  return (

    < >
   
    <div className="form flex flex-col ">
    <div className="title m-4">Fill Event details</div>
    <div className=' flex flex-col form-section '>
      
      <div class="inputs">
    <label className='form-label'>Event Name</label>
    <input className='form-input' id='event-name' type="text" placeholder="" />
    <label className='form-label' >Event Shedule</label>
    <input className='form-input' id='event-time' type="text" placeholder="" />
    <label className='form-label'>Event venue</label>
    <input className='form-input' id='event-venue' type="text" placeholder="" />
    <label className='form-label'>Event Topic</label>
    <input className='form-input' id='event-topic' type="text" placeholder="" />
    <label className='form-label'>Conducting members </label>
    <input className='form-input' id='event-members' type="text" placeholder="" />
    <button  id='add-bt' type="submit" className='mt-4 form-button' onClick={AddEvent}>Add Event</button>
  </div>
    </div>
    </div>
    </>
  )
}

export default AddEvent
