import React from 'react'
import { auth } from '../firebase/firebase'
import { updateProfile } from 'firebase/auth'

function UpdateProfile() {
  const updateprofile=()=>{
    const name=document.getElementById('display-name').value
    const photoURL=document.getElementById('photo-url').value
  

    let profile={   }
    if(name){
      profile.displayName=name;
    }
   

    if(photoURL){
      profile.photoURL=photoURL;
    }
    
    

    updateProfile(auth.currentUser,profile).then((res)=>{
      console.log(res)
      alert("profile updated")

    }).catch(err=>{
      console.log(err.message)
    })
  }
  return (
    <div>
      <div className="form flex flex-col ">
    <div className="title m-4">Update Profile</div>
    <div className=' flex flex-col form-section '>
      
      <div class="inputs">
    <label className='form-label'>Display name</label>
    <input className='form-input' id='display-name' type="text" placeholder="" />
    <label className='form-label'>Photo url</label>
    <input className='form-input' id='photo-url' type="text" placeholder="" />
    <button  id='add-bt' type="submit" className='mt-4 form-button' onClick={updateprofile}>Update</button>
  </div>
    </div>
    </div>
      
    </div>
  )
}

export default UpdateProfile
