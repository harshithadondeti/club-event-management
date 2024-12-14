import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'
import { Link } from 'react-router-dom'

function Profile() {
  const user = useSelector(selectUser)

  return (
    <div className="profile-container">
      <div className='flex m-2 p-4 '>
      <div className='mr-6'>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        
      </div>
      <div>
        <img src={user?.photo} alt="Profile" />
      </div>
      </div>
      

      <Link to={'/updateprofile'}>
        <h3>Update Profile</h3>
      </Link>
    </div>
  )
}

export default Profile
