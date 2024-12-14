import React, { useState,useEffect } from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'
import axios  from 'axios'

function Home() {

  const user=useSelector(selectUser)
  const [events,setEvents]=useState([])
 
  useEffect(()=>{
    const fetchData=async()=>{
      try {
      const response=await axios.get('http://localhost:3000/api/event')
      setEvents(response.data)
    }catch (error) {
      console.log(error) 
    }
}
fetchData();
  },[])


  return (
    <div className='Home '>
      {
         user?(
         <>
        <div className=' mt-7 events flex flex-col '> 
          {
          events.map(data=>(<>

<section className=' mt-4  w-1/2 border  border-purple-400 object-center card'>
        <div className='event-head mb-5'>
        <span className='text-center text-2xl mt-3'>{data.name} </span>
        <span className='time-details'><i class="bi bi-clock-fill"></i> {data.time}</span>
        </div>
        <div className='event-info flex flex-col '>
        
        <li><i class="bi bi-geo-alt-fill"></i>Venu : {data.venue}</li>
        <li><i class="bi bi-book-fill"></i>Concept:{data.topic}</li>
        <li><i class="bi bi-person-fill"></i>-By:{data.members}</li>
        </div>
        </section>
          </>))
        
}
      </div>


         </>):(
        <>
        <div className='msg mt-7 text-3xl text-center '>
         <h2>Login to see Details</h2>
         </div>
         </>)

      }
     
    </div>
  )
}

export default Home
